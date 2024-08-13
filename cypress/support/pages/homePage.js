class homePage {

searchSelector             = '#suggestion-search'
searchButtonSelector       = '#suggestion-search-button'
menuSelector               = '.ipc-responsive-button__text'

// Method    : To enter the actor name passed as parameter and click on search button on the main page search
// Paramater : actorName
searchActor(actorName){
    
        // Finding the search element, typing actor name and cliccking on search button        
        cy.get(this.searchSelector).type(actorName);

        cy.get(this.searchButtonSelector).click();
    }

// Method    : To unfold the menu on the main page search
unfoldMenu(){

        cy.get(this.menuSelector).contains('Menu').click();

    }    

}

export default homePage;