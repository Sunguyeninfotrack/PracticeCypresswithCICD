/// <reference types="cypress" />

import{Login} from "../../Convencing_InsolvencyNZ.json"

class LoginInsovency
{
    static homepageInsovency()
    {
        cy.visit(Cypress.env('StagingInsolvency'));     
    }
    static loginInsovency()
    {
    cy.fixture('UserloginInsovency').then(function(userlogin)
    {
        this.userlogin = userlogin         
     cy.get(Login.username).type(this.userlogin.username)
     cy.get(Login.password).type(this.userlogin.password)    
    }) 
    }    
    static SubmitInsovency()
    {
        cy.waitUntil(()=>cy.get(Login.loginbtn).click());
        cy.visit(Cypress.env('StagingInsolvency'))
        cy.wait(3000) 
    }
       
}
export default LoginInsovency;