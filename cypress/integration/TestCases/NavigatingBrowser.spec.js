/// <reference types="cypress" />

describe('Test Suite ', function()
{

it('Navigation browser', function()
{
    //Alert

    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce demo store')
    cy.get('.ico-register').contains('Reg').click()
    cy.wait(300)
    cy.title().should('eq','nopCommerce demo store. Register')
    cy.go('back')
    cy.title().should('eq','nopCommerce demo store')
    cy.go('forward')
    cy.title().should('eq','nopCommerce demo store. Register')
    cy.go(-1)//Same back above and return Homepage
    cy.title().should('eq','nopCommerce demo store')
    cy.go(1)// Same forward above and return the Register page
    cy.title().should('eq','nopCommerce demo store. Register')
    cy.reload() //Reload page
    cy.wait(300)
}

)
}
)