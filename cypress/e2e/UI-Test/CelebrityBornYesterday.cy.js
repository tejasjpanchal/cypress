/// <reference types="cypress" />


import homePage from             "../../support/pages/homePage";
import menuPage from             "../../support/pages/menuPage";
import advanceSearchPage from    "../../support/pages/advanceSearchPage";
import { getYesterdayDate } from "../../support/utilityFunction";


describe('Test Secnario - 04 : Test to find Celebrities born yesterday ', () => {

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

    it('Should Navigates to IMDb, searches for celebrities born yesterday, Select 3rd celebrity, and takes a screenshot', () => {

        // Creating Object to access Pages 
        const homePageObj          = new homePage();        
        const menuPageObj          = new menuPage();        
        const advanceSearchPageObj = new advanceSearchPage();
      
        // Unfold the menu        
        homePageObj.unfoldMenu();           
      
        // Navigate to Born Today section                
        menuPageObj.nevigateToSpecificSection('Born Today');          

        // Delete default search                
        advanceSearchPageObj.deleteDefaultSearch();
        
        // Unfold on search filter - Birthday
        advanceSearchPageObj.unfoldSearchFilterByGivenName('Birthday');        

        // Get Yesetrday Date
        const yesterday = getYesterdayDate();

        advanceSearchPageObj.searchByBirthday(yesterday);        
      
        // Click on 3rd Name        
        advanceSearchPageObj.selectNthName(3)
        
        // Take a screenshot
        cy.screenshot('3rd_celeb_with_birthday_yesterday');
         
    });

  });