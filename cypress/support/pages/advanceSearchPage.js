import { getIndexValue } from '../utilityFunction.js';
import "cypress-real-events";

class advanceSearchPage {

    // Element Selectors 
    defaultSearchSelector      =  '[data-testid="chip-list-test-id"]'
    searchFilterSelector       =  '[data-testid="accordion-item"]'
    birthdayFilterSelector     =  'input[data-testid="birthday-input-test-id"]'
    seeResultButtonSelector    =  '[data-testid="adv-search-get-results"]'    
    nameSelector               =  '.ipc-title a'
    startDateSelector          =  '[data-testid="birthDate-start"]'
    endDateSelector            =  '[data-testid="birthYearMonth-end"]'


    // Method    : To Delete Default Search on Advance Search page
    deleteDefaultSearch(actorName){
                
        cy.get(this.defaultSearchSelector).click();

    }

    
    // Method    : To unfold specific Search Filter based on Given Name under Advance Search 
    // Parameter : filterName
    unfoldSearchFilterByGivenName(filterName) {
            
        cy.get(this.searchFilterSelector).contains(filterName).click();

    }    

    // Method    : To select starrt date using date picker 
    selectStartDateSameAsToday40YearsAgoUsingDatepicker() {        
            
        cy.get(this.startDateSelector).click({ force: true });
        cy.wait(1000);
        
        // Opening Datpicker using F4
        cy.get(this.startDateSelector).realPress("F4");

        // Pressing TAB 3 time to go to Year selction section on datepicker
        cy.realPress("Tab");
        cy.realPress("Tab");
        cy.realPress("Tab");
        cy.wait(1000);  // wait to complete action to make sure next action get sufficient time to perform as action as expcted  

        cy.realPress("Enter"); // to open year selction section 
        cy.wait(1000) // wait to complete action to make sure next action get sufficient time to perform as action as expcted  
        
        // Loop through 40 times to go back 40 years behind
        for (let i = 1; i <= 40; i++) {
            cy.realPress("PageUp");
            cy.wait(500);
        }
        
        // To select found date
        cy.realPress("Enter");
        cy.realPress("Enter");
    }
    
    
    // Method    : To Enter date in to Date string field of Birth date filter  
    // Parameter : Birthday
    enterDateInToDateStringField(Birthday) {
        
        cy.get(this.endDateSelector).type(`${Birthday}{enter}`);        
        
    }

    // Method    : To click on See Result button    
    clickOnSeeResultButton() {        

        cy.get(this.seeResultButtonSelector).contains('See results').click({force: true}); 
        
    }

    // Method    : To Search Name by Birthday  
    // Parameter : Birthday
    searchByBirthday(Birthday) {
        
        cy.get(this.birthdayFilterSelector).type(`${Birthday}{enter}`);

        cy.get(this.seeResultButtonSelector).contains('See results').click({force: true}); 
        
    }
   

    // Method    : To search result by entering the date with format (YYYY-MM-DD) under from date filed and 
    //             entering the date with format (YYYY-MM) in the string field for the “to” option  
    // Parameter : Birthday
    searchByBirthDate(BirthDate) {
        
        //cy.get(this.startDateSelector).type(BirthDate)       
        
        cy.get(this.endDateSelector).type(BirthDate)    

        cy.get(this.seeResultButtonSelector).contains('See results').click({force: true}); 
        
    }

    // Method    : To click nth name from the search result list
    // Paramater : nthPhoto
    selectNthName(nthName) {

        // Getting nth Name Index value which is one less than actual value
        let indexValue  = getIndexValue(nthName);

        cy.get(this.nameSelector).eq(indexValue).click({force: true});        

    }    

}

export default advanceSearchPage;