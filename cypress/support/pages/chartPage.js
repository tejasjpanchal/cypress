import { getIndexValue } from '../utilityFunction.js';

class chartPage {
    
    // Element Selectors 
    
    itemListSelector      = '.cli-parent .cli-children div a.ipc-title-link-wrapper'
    itemNameListSelector  = '.ipc-title__text'

    // Method    : To Click on the nth item on the Selected Section list 
    // Paramater : nthItemIndex
    clickOnNthItemInChartsList(nthItem) {
        
        // Getting nth Item Index value which is one less than actual value
        let indexValue  = getIndexValue(nthItem);        
        
        cy.get(this.itemListSelector).eq(indexValue).click();
        
    }

    // Method    : To Click on the item by its name on the Selected Section list 
    // Paramater : itemName
    clickOnItemByNameInChartsList(itemName) {

        cy.contains(this.itemNameListSelector, itemName).should('exist').click({force: true});  // Added {force: true} due to firefox            
    
    }   

}

export default chartPage;