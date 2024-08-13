/// <reference types="cypress" />

import homePage from           "../../support/pages/homePage";
import searchResultPage from   "../../support/pages/searchResultPage";
import profilePage from        "../../support/pages/profilePage";


describe('Test Scenario - 01 : Access Actor Profile and Upcoming Movies', () => {

    let inputData; // Declare inputData 
    
    before(() => {        

        cy.setBrowserSize();  // Set the size of the browser

        cy.visitIMDb();        // Visit IMDb website 
        
        cy.clickAccept();      // Click on Accept button     

        // Load fixture data before running any tests
        cy.fixture('IMDbTestData').then( (data)  => {
            
            inputData = data;   // Assign fixture data to inputData
        
        });    
  
    });   
  
 
    it('Should search for Nicolas Cage profile and navigate to his first upcoming completed movie', () => {
      
        // Creating Object to access Pages 
        const homePageObj         = new homePage();
        const searchResultPageObj = new searchResultPage();
        const profilePageObj      = new profilePage();
      
        // Searching Actor Profile on home page
        homePageObj.searchActor(inputData.actorName);
      
        // Accesing Actor Profile on Result Page
        searchResultPageObj.clickOnExactMatchesButton();
        searchResultPageObj.clickOnActorName(inputData.actorName);
            
        // Unfold Upcoming tab under Actor section profile page
        profilePageObj.unfoldUpcomingTabUnderActorSection();

        // Clicking on the first movie with Completed Tag under profile page
        profilePageObj.clickOnMovieWithSpecifiedTag(inputData.movieTag);
      
    });

});

