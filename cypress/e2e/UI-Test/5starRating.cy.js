
/// <reference types="cypress" />


import homePage from            "../../support/pages/homePage";
import menuPage from            "../../support/pages/menuPage";
import chartPage from           "../../support/pages/chartPage";
import IMDbRatingPage from      "../../support/pages/IMDbRatingPage";
import movieShowDetailPage from "../../support/pages/movieShowDetailPage";


describe('Test Scenario - 02 : Give 5 Start Rating to Movie in IMDB', () => {

    let inputData; // Declare inputData 
    
    before(() => {        

        cy.setBrowserSize() ;  // Set the size of the browser

        cy.visitIMDb();        // Visit IMDb website 
      
        cy.clickAccept();      // Click on Accept button     

        // Load fixture data before running any tests
        cy.fixture('IMDbTestData').then( (data)  => {
          
            inputData = data;      // Assign fixture data to inputData
      
        });    

    });  

    it('Should navigate to IMDb, go to Top Box Office Section, select the 2nd movie, and rate it 5 stars', () => {

        // Creating Object to access Pages 
        const homePageObj              = new homePage();        
        const menuPageObj              = new menuPage();
        const chartPageObj             = new chartPage();
        const movieShowDetailPageObj   = new movieShowDetailPage();
        const IMDbRatingPageObj        = new IMDbRatingPage();
    
        // Unfold the menu        
        homePageObj.unfoldMenu();           
      
        // Navigate to Top Box Office section        
        menuPageObj.nevigateToSpecificSection(inputData.movieSectionName)
 
        // Click on the 2nd item on the Top Box Office list                              
        chartPageObj.clickOnNthItemInChartsList(2);      

        // Click on the IMDb Rating button        
        movieShowDetailPageObj.clickOnIMDbRating();
        
        // click on Rate Button             
        IMDbRatingPageObj.clickOnRateButton();
        
        // Give 5 the star rating 
        // Passing 5th star button          
        IMDbRatingPageObj.giveNthStarRating(inputData.movieRatingStar); 
        
        // Click on the Rate button        
        IMDbRatingPageObj.clickOnModalRateButton();
       
    });

});