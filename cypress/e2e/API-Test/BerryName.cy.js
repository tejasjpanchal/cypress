
import { assertPropertyExistAndNotEmpty , assertPropertyExistAndNotNull , assertPropertyValue , assertStatusCode } from "../../support/utilityFunction";

describe('PokeAPI valid berry Name Tests', () => {

  let inputData; // Declare inputData 

  before(() => {             

      // Load fixture data before running any tests
      cy.fixture('pokeAPITestData').then( (data)  => {
    
          inputData = data;      // Assign fixture data to inputData

      });

  });

  it('should return a valid response for a valid berry Name', () => {    

    // Iterating through each berry name in pokeAPITestData
    inputData.validBerryName.forEach(berryName => {           
      
        cy.request({
            method: 'GET',            
            url: `${inputData.apiUrl}/berry/${berryName}`,
            failOnStatusCode: false  // Do not fail the test on HTTP errors
          }).then((response) => {

            // Assert the status code            
            assertStatusCode(response.status, 200)
            
            // Assert the response body
                
            // Assert Value of 'id' property
            assertPropertyValue(response.body, 'name', berryName);                                
            
            // Assert that the property exist and not Null for all Integer property
            assertPropertyExistAndNotNull(response.body, 'id');                 
            assertPropertyExistAndNotNull(response.body, 'growth_time');                
            assertPropertyExistAndNotNull(response.body, 'max_harvest');                
            assertPropertyExistAndNotNull(response.body, 'smoothness');                       
            assertPropertyExistAndNotNull(response.body, 'size');

            // Assert that the property exist and not Empty for all String or Array property            
            assertPropertyExistAndNotEmpty(response.body, 'firmness');
            assertPropertyExistAndNotEmpty(response.body, 'flavors');                   
            
              
        });

  });


  });

  it('should return an error for an invalid berry Name', () => {
    
    // Use an invalid berry Name, for example 'apple'    

    cy.request({
        method: 'GET',
        url: `${inputData.apiUrl}/berry/${inputData.invalidBerryName}`,
        failOnStatusCode: false  // Do not fail the test on HTTP errors
      }).then((response) => {

        // Assert the status code
        assertStatusCode(response.status, 404);

        // Assert the response body      
        expect(response.body).contains('Not Found');

    });

  });

});