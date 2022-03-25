/// <reference types="cypress" />

import{Search} from "../../Convencing_InsolvencyNZ.json"

class NZNameObject
{        
    static SearchName()
    {        
       cy.get(Search.Matter).type(userID_Alpha())
        function userID_Alpha()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";        
            for (var i = 0; i < 8; i++)
            text  += possible.charAt(Math.floor(+Math.random() * possible.length));        
            return text;
        }
        cy.wait(3000)
        cy.get(Search.DocumentID).type('BURTON')
        cy.wait(3000)
    }
    static SelectName()
    {
        cy.get(Search.NameSelect).click()
    }
    static List()
    {
        cy.get(Search.BurtonBankrupt).should('contain','Current Bankrupt')
        cy.get(Search.BurtonDischarged).should('contain','Discharged Early')
        cy.get(Search.ButtonConditionally).should('contain','Conditionally Discharged')
        cy.get(Search.ButtonNAP).should('contain','Current NAP')
    }
    static OrderClick()
    {
        cy.get(Search.OrdBtn).click()
    }
    static OrderStatus()
    {
        cy.get(Search.OrderDetail).click()
        cy.get(Search.OrderStatus).should('contain','The order completed successfully.')
    }
  
}
export default NZNameObject;

