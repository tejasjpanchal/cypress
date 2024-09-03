/// <reference types="cypress" />

import homePage from             "../../support/pages/homePage";
import menuPage from             "../../support/pages/menuPage";
import advanceSearchPage from    "../../support/pages/advanceSearchPage";
import { getDate40YearsAgo } from "../../support/utilityFunction";


describe('Test Secnario - 04 : Test to find Celebrities born on same day as today but exactly 40 years ago  ', () => {

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

    it('Should Navigates to IMDb, searches for celebrities born same day as today but exactly 40 years ago , Select 1st celebrity, and takes a screenshot', () => {

        // Creating Object to access Pages 
        const homePageObj          = new homePage();        
        const menuPageObj          = new menuPage();        
        const advanceSearchPageObj = new advanceSearchPage();
      
        // Unfold the menu        
        homePageObj.unfoldMenu();           
      
        // Navigate to Born Today section                
        menuPageObj.nevigateToSpecificSection('Born Today');          

        // delete default search                
        advanceSearchPageObj.deleteDefaultSearch();       
        
        // Unfold on search filter - Birth date
        advanceSearchPageObj.unfoldSearchFilterByGivenName('Birth date');     

        // Select start date same as today but 40 years ago using Datepicker
        advanceSearchPageObj.selectStartDateSameAsToday40YearsAgoUsingDatepicker();

        // Get the same day as today but exactly 40 years ago
        const searchDate =  getDate40YearsAgo();
        
        // Enter calculated date under Birth date filter in the string field for the “to” option                  
        advanceSearchPageObj.enterDateInToDateStringField(searchDate);     
        
        //Click On See Result Button
        advanceSearchPageObj.clickOnSeeResultButton();
        
        // Click on 1st Result        
        advanceSearchPageObj.selectNthName(1);        
        
        // Take a screenshot
        cy.screenshot('1st_celeb_with_birthday_same_as_today_but_40_years_ago');
         
    });

  });
      
      