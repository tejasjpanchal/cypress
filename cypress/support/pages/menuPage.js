class menuPage {

        // Element Selectors 
        
        navigationSectionSelector  = '.ipc-list-item__text'

        // Method    : To Navigate to Specfic Section on the Menu Page
        // Paramater : navigationSectionName
        nevigateToSpecificSection(navigationSectionName) {
                
                cy.get(this.navigationSectionSelector).contains(navigationSectionName).click();   

        }

}

export default menuPage;