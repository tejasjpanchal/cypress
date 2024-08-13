
import { assertPropertyExistAndNotEmpty , assertPropertyExistAndNotNull , assertPropertyValue, assertStatusCode } from "../../support/utilityFunction";


describe('PokeAPI valid berry id Tests', () => {

    let inputData; // Declare inputData 

    before(() => {             

        // Load fixture data before running any tests
        cy.fixture('pokeAPITestData').then( (data)  => {
      
            inputData = data;      // Assign fixture data to inputData
  
        });

    });

    it('should return a expexted response for a valid berry ID', () => {

        // Iterating through each berry ID in pokeAPITestData
        inputData.validBerryId.forEach(berryId => {            
            
            cy.request({
                method: 'GET',
                url: `${inputData.apiUrl}/berry/${berryId}`,
                failOnStatusCode: false  // Do not fail the test on HTTP errors
            }).then((response) => {
        
                // Assert the status code                
                assertStatusCode(response.status, 200);

                // Assert the response body
                
                // Assert Value of 'id' property
                assertPropertyValue(response.body, 'id', berryId);                                
                
                // Assert that the property exist and not Null for all Integer property                              
                assertPropertyExistAndNotNull(response.body, 'growth_time');                
                assertPropertyExistAndNotNull(response.body, 'max_harvest');                
                assertPropertyExistAndNotNull(response.body, 'smoothness');                       
                assertPropertyExistAndNotNull(response.body, 'size');

                // Assert that the property exist and not Empty for all String or Array property
                assertPropertyExistAndNotEmpty(response.body, 'name');
                assertPropertyExistAndNotEmpty(response.body, 'firmness');
                assertPropertyExistAndNotEmpty(response.body, 'flavors');             
                
            });

        });        

    });

    it('should return an error for an invalid berry ID', () => {
        
        // Use an invalid berry ID       
        cy.request({
            method: 'GET',
            url: `${inputData.apiUrl}/berry/${inputData.invalidBerryId}`,
            failOnStatusCode: false  // Do not fail the test on HTTP errors
          }).then((response) => {

          // Assert the status code
          assertStatusCode(response.status, 404);

          // Assert the response body     
          expect(response.body).contains('Not Found');
        
        });
  
    });

});