/// <reference types="cypress" />

import homePage from             "../../support/pages/homePage";
import menuPage from             "../../support/pages/menuPage";
import chartPage from            "../../support/pages/chartPage";
import movieShowDetailPage from  "../../support/pages/movieShowDetailPage";
import photoGalleryPage from     "../../support/pages/photoGalleryPage";


describe('Test Secnario - 02 : IMDb Top 250 TV Shows - Breaking Bad Photos', () => {

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

    it('Should Navigate to Breaking Bad photos and select Danny Trejo Second photos', () => {

        // Creating Object to access Pages 
        const homePageObj         = new homePage();        
        const menuPageObj         = new menuPage();
        const chartPageObj        = new chartPage();
        const movieShowPageObj    = new movieShowDetailPage();        
        const photoGalleryPageObj = new photoGalleryPage();
      
        // Unfold the menu        
        homePageObj.unfoldMenu();           
      
        // Navigate to Top 250 TV Show section                
        menuPageObj.nevigateToSpecificSection(inputData.tvShowsSectionName);    

        // Click on TV Shows Breaking Bad        
        chartPageObj.clickOnItemByNameInChartsList(inputData.tvShowName);

        // Go to the Photos section        
        movieShowPageObj.clickOnPhotos();
        
        // Display only Danny Trejo's photos      
        photoGalleryPageObj.searchPhotoByCelebrityName(inputData.celebrityName);
        
        // Close prompt dialog 
        photoGalleryPageObj.closePrompt();        
            
        //Click on Second photo of Danial Trejo by passing parameter as 2     
        photoGalleryPageObj.selectNthPhoto(2);
        
    }); 
     
});
  