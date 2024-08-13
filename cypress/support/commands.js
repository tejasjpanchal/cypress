// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//


import { should } from "chai";

Cypress.Commands.add('setBrowserSize', () => { 

      cy.viewport(1280, 720);

  });

Cypress.Commands.add('visitIMDb', () => { 

    cy.visit('', { failOnStatusCode: false }); 
  
  });

Cypress.Commands.add('clickAccept', () => {     
      
      cy.get('[data-testid="accept-button"]').should('be.visible').contains('Accept').click();
  
  });



