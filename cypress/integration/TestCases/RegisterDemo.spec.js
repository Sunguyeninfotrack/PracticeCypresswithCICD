/// <reference types="cypress" />

describe('Test Suite ', function()
{
it('Register flow', function()
{
    
    cy.viewport(1920,720)
    cy.visit("https://demo.nopcommerce.com/register?returnUrl=%2F")
    cy.get('#gender-male').click()
    cy.get('#FirstName').type ('mrsu')
    cy.get('#LastName').type('nguyen')
    cy.get('[name="DateOfBirthDay"]').select('1').should('have.value','1')
    cy.get('[name="DateOfBirthMonth"]').select('3').should('have.value','3')
    cy.get('[name="DateOfBirthYear"]').select('1913').should('have.value','1913')
    cy.get('#Email').type('sunguyenhse32duu2005881@gmail.com')
    cy.get('#Company').type('Nashtech')
    cy.get('#Password').type('Su200588')
    cy.get('#ConfirmPassword').type('Su200588')
    cy.get ('#register-button').click()
    cy.wait(300)
    cy.get('.result').contains('Your registration completed')
    cy.url().then(value => {
        cy.log('The current URL is', value)
    })
  
}

)

}

)
