/// <reference types="cypress" />

describe('Test Suite ', function()
{
it('Element Get ', function()
{
    

 
    cy.visit("https://www.freshworks.com/")
    cy.get('#onetrust-accept-btn-handler').click()// Accept cookie

    cy.get('.mt-md > .button--solid ').click()
    
    //Verify that the page is present
    cy.get ('[class="container font-color-light banner-content l-banner "]')
    .should('contain.text','The customer and employee delight engine you deserve')

    //Verify that the Freshdesk Omnichannel Suite is available in list
    cy.get('[class="col-md-6 product-item"]').should('contain.text','Freshdesk Support Desk')

    //Verify the URL 
   cy.url().then(value => {
    cy.log('The current URL is', value)
    })

    // Click on Start Trial button
  
   cy.get('a.button.button--white.button--small.hover-fdesk.product-href')
   .click({ multiple: true })
  
    cy.get('#onetrust-accept-btn-handler').click()// Accept cookie
    cy.screenshot()
   

    
  
}

)

}

)
