import { getIndexValue } from '../utilityFunction.js';

class IMDbRatingPage {

    // Element Selectors 
    ratingButtonSelector      = '[data-testid="rating-button__user-rating__unrated"]'
    starRatingButtonSelector  = '.ipc-starbar__rating__button'
    rateButtonSelector        = '.ipc-rating-prompt__rate-button'

    // Method    : To Click on the Rate button
    clickOnRateButton() {
        
        cy.get(this.ratingButtonSelector).click();         

    }    


    // Method    : To give nth star rating to Movie
    // Parameter : nthStar
    giveNthStarRating(nthStar) {
        
        // Getting nth Star Index value which is one less than actual value
        let indexValue  = getIndexValue(nthStar);

        cy.get(this.starRatingButtonSelector).eq(indexValue).click({force: true});
            
    }    


    // Method    : To click on the Rate button
    clickOnModalRateButton() {
                
        cy.get(this.rateButtonSelector).click();

    }

}

export default IMDbRatingPage;