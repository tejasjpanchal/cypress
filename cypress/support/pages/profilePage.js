class profilePage {

    // Element Selectors     
    upcomingTabSelector  =  '[data-testid="accordion-item-actor-upcoming-projects"]' 
    movieListSelector    =  '#accordion-item-actor-upcoming-projects .unreleased-credit .ipc-metadata-list-summary-item__c'        

    // Method : To Unfold the Upcoming Tab on Profile Page 
    unfoldUpcomingTabUnderActorSection() {        
        
        cy.get(this.upcomingTabSelector).click({force: true});  // Added {force: true} due to firefox
    
    }

    // Method    : To click on movie with specified Tag name passed as an argument 
    // parameter : movieTag
    clickOnMovieWithSpecifiedTag(movieTag) {               
                
        cy.get(this.movieListSelector).each(($movieComponent)=>{   
                
        // Getting Movie Tag text from the child element 
        let movieTagText  =  $movieComponent.children('.ipc-metadata-list-summary-item__tc').children('ul.ipc-metadata-list-summary-item__stl').children('li.ipc-inline-list__item').children('a.ipc-metadata-list-summary-item__li--link').text();        
                
            // Comparing Movie Tag text extracted from child element with Movie Tag passed from the test case as test data  
            if (movieTagText == movieTag){            

                // find the right child with movie name and click on it                                
                cy.get($movieComponent.children('.ipc-metadata-list-summary-item__tc').children('.ipc-metadata-list-summary-item__t')).click();                             
                    
                return false;  // to break loop , as once first element is found no need to continue loop                    
            }

        });
             
    }

}

export default profilePage;