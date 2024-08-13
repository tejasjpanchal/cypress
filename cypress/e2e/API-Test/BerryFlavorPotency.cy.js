
import { assertPropertyExistAndNotEmpty , assertPropertyExistAndNotNull , assertPropertyValue , assertStatusCode } from "../../support/utilityFunction";

describe('PokeAPI flavor and potency tests', () => {

    let inputData; // Declare inputData 

    before(() => {             

        // Load fixture data before running any tests
        cy.fixture('pokeAPITestData').then( (data)  => {
      
            inputData = data;    // Assign fixture data to inputData

        });

    });
  
    it('Fetch a berry with spicy flavor using a valid name and validate response', () => {   
        
        inputData.validBerryFlavor.forEach(berryFlavor => {      
        
            cy.request({
                method: 'GET',
                url: `${inputData.apiUrl}/berry-flavor/${berryFlavor}`,
                failOnStatusCode: false   // Do not fail the test on HTTP errors
            }).then((response) => {

                // Assert the status code            
                assertStatusCode(response.status, 200)
                
                // Assert the response body
                    
                // Assert Value of 'name' property
                assertPropertyValue(response.body, 'name', berryFlavor);                                
                
                // Assert that the property exist and not Null for all Integer property
                assertPropertyExistAndNotNull(response.body, 'id');                 

                // Assert that the property exist and not Empty for all String or Array property
                assertPropertyExistAndNotEmpty(response.body, 'berries');
                assertPropertyExistAndNotEmpty(response.body, 'contest_type');
                assertPropertyExistAndNotEmpty(response.body, 'names');                                 
                
            });

        });

    });

    it('Should return an error for an invalid berry flavor ', () => {
    
        // Use an invalid berry Name, for example 'apple'    
    
        cy.request({
            method: 'GET',
            url: `${inputData.apiUrl}/berry-flavor/${inputData.invalidBerryFlavor}`,
            failOnStatusCode: false  // Do not fail the test on HTTP errors
          }).then((response) => {
    
            // Assert the status code
            assertStatusCode(response.status, 404);
    
            // Assert the response body      
            expect(response.body).contains('Not Found');
    
        });
    
    });

    it('Retrieve all berries with "spicy" flavor and fetch the one with the highest potency', () => {
          
        cy.request({
            method: 'GET',
            url: `${inputData.apiUrl}/berry-flavor/${inputData.flavorNameForPotency}`,
            failOnStatusCode: false  // Do not fail the test on HTTP errors
            }).then((response) => {

                const berries = response.body.berries;
                expect(berries).to.be.an('array').and.to.have.length.greaterThan(0);

                let highestPotencyBerry = berries[0];
                let highestPotency = 0;       

                berries.forEach(berryEntry => {
                    if (berryEntry.potency > highestPotencyBerry.potency) {
                        highestPotencyBerry = berryEntry;
                        highestPotency = highestPotencyBerry.potency; 
                    }
                });

                const highestPotencyBerryName = highestPotencyBerry.berry.name;
          
                cy.request({
                method: 'GET',
                url: `${inputData.apiUrl}/berry/${highestPotencyBerryName}`,
                failOnStatusCode: false  // Do not fail the test on HTTP errors
                }).then((berryResponse) => {                   
                                                            
                    // Assert the status code            
                    assertStatusCode(berryResponse.status, 200);
                    
                    // Assert Value of 'id' property
                    assertPropertyValue(berryResponse.body, 'name', highestPotencyBerryName);                                
                    
                    // Assert that the property exist and not Null for all Integer property
                    assertPropertyExistAndNotNull(berryResponse.body, 'id');                 
                    assertPropertyExistAndNotNull(berryResponse.body, 'growth_time');                
                    assertPropertyExistAndNotNull(berryResponse.body, 'max_harvest');                
                    assertPropertyExistAndNotNull(berryResponse.body, 'smoothness');                       
                    assertPropertyExistAndNotNull(berryResponse.body, 'size');

                    // Assert that the property exist and not Empty for all String or Array property            
                    assertPropertyExistAndNotEmpty(berryResponse.body, 'firmness');
                    assertPropertyExistAndNotEmpty(berryResponse.body, 'flavors'); 
                  });
            });
    });

});