/// <reference types="cypress" />

import{Document} from "../../Convencing_InsolvencyNZ.json"

class NZDocumentObject
{        
    static SearchDocument()
    {        
       cy.get(Document.Matter).type(userID_Alpha())
        function userID_Alpha()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";        
            for (var i = 0; i < 8; i++)
            text  += possible.charAt(Math.floor(+Math.random() * possible.length));        
            return text;
        }
        cy.wait(3000)
        cy.get(Document.DocumentID).type('825929')
        cy.wait(3000)
    }   
    static Documentdisplay()
    {
        cy.get(Document.Documentdisplay).should('contain','825929')
    }
    static OrderClick()
    {
        cy.get(Document.OrdBtn).click()
    }
    static OrderStatus()
    {
        cy.get(Document.OrderDetail).click()
        cy.get(Document.OrderStatus).should('contain','The order completed successfully.')
    }
  
}
export default NZDocumentObject;

