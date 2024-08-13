class movieShowDetailPage {

    // Element Selectors 
    IMDbRatingSelector  = '[data-testid="hero-rating-bar__aggregate-rating__score"]'
    photoSelector       = '[data-testid="hero__photo-link"]'

    // Method    : To Click on the IMDb Rating button
    clickOnIMDbRating() {
        
            cy.get(this.IMDbRatingSelector).should('be.visible').eq(0).click(); 

        }    

    // Method    : To Click on the Photos
    clickOnPhotos() {
        
        cy.get(this.photoSelector).contains('Photos').click();     

    }    

}

export default movieShowDetailPage;