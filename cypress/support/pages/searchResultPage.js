class searchResultPage {

    // Element Selectors 
    exactMatchButtonSelector = '.ipc-btn__text'
    exactMatchButtonText     = 'Exact matches'
    actorNameSelector        = '.ipc-metadata-list-summary-item__tc'

    // Method : To click on Exact match button to get exact result of search 
    clickOnExactMatchesButton()  {

        cy.get(this.exactMatchButtonSelector).contains(this.exactMatchButtonText).click({force: true});  // Added {force: true} due to firefox
    }


    // Method    : To click on Actor Name 
    // Parameter : actorName
    clickOnActorName(actorName)  {
        
        cy.get(this.actorNameSelector).contains(actorName).click();
    }

}

export default searchResultPage;