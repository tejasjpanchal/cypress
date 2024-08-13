import { getIndexValue } from '../utilityFunction.js';

class advanceSearchPage {

    // Element Selectors 
    defaultSearchSelector      =  '[data-testid="chip-list-test-id"]'
    searchFilterSelector       =  '[data-testid="accordion-item"]'
    birthdayFilterSelector     =  'input[data-testid="birthday-input-test-id"]'
    seeResultButtonSelector    =  '[data-testid="adv-search-get-results"]'
    nameSelector               =  '[data-testid="nlib-title"]'
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
        
        cy.get(this.startDateSelector).type(BirthDate)       
        
        cy.get(this.endDateSelector).type(BirthDate)    

        cy.get(this.seeResultButtonSelector).contains('See results').click({force: true}); 
        
    }

    // Method    : To click nth name from the search result list
    // Paramater : nthPhoto
    selectNthName(nthName) {

        // Getting nth Name Index value which is one less than actual value
        let indexValue  = getIndexValue(nthName);

        cy.get(this.nameSelector).eq(indexValue).click();        

    }    

}

export default advanceSearchPage;