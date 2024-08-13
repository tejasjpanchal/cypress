import { getIndexValue } from '../utilityFunction.js';

class photoGalleryPage {

    // Element Selectors 
    gallerySelector             =  '[data-testid="mv-gallery-button"]'
    celebDropdownSelector       =  '[data-testid="image-chip-dropdown-test-id"]'
    personFilterSelector        =  '#Person-filter-select-dropdown'
    promptContainerSelector     =  '[data-testid="image-names-filter-container-test-id"]'
    promptSelector              =  '[data-testid="promptable__x"]'
    imageSelector               =  '[data-testid="image-gallery-image"]'
    

    // Method    : To find photos of celebrity by Name
    // Paramater : celebrityName
    searchPhotoByCelebrityName(celebrityName){
                
        cy.get(this.gallerySelector).click();
        
        cy.get(this.celebDropdownSelector).click();        

        cy.get(this.personFilterSelector).then($dropdown => {
                    
                // Iterate over each option in the dropdown
                cy.wrap($dropdown).find('option').each($option => {
                    
                // Check if the option's text includes the substring
                const optionText = $option.text();
                if (optionText.includes(celebrityName)) {
                    
                    // If it does, select the option
                    cy.wrap($dropdown).select($option.val());
                        
                    // Optionally, break out of the loop by returning false
                    return false;
                }

            });
            
        });    
            
    }

    // Method    : To close the prompt appears on gallery page
    closePrompt() {

        cy.get(this.promptContainerSelector).should('be.visible')
        cy.get(this.promptSelector).should('be.visible').click();        

    }    

    // Method    : To select nth photo from the available photos on gallery page
    // Paramater : nthPhoto
    selectNthPhoto(nthPhoto) {

        // Getting nth photo Index which is one less than actual value
        let indexValue  = getIndexValue(nthPhoto);

        cy.get(this.imageSelector).eq(indexValue).click();        
        
    }    

}


export default photoGalleryPage;