/// <reference types="cypress" />

import{Document_status} from "../../Convencing_InsolvencyNZ.json"
class NZDocumentStatus
{        
    static Bankrupt()
    {        
       cy.get(Document_status.Matter1).type(userID_Alpha())
        function userID_Alpha()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";        
            for (var i = 0; i < 8; i++)
            text  += possible.charAt(Math.floor(+Math.random() * possible.length));        
            return text;
        }
        cy.wait(3000)
        cy.get(Document_status.DocumentID1).type('893988')
        cy.wait(3000)
    }  
    static DischargedEarly()
    {        
       cy.get(Document_status.Matter2).clear().type(userID_Alpha())
        function userID_Alpha()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";        
            for (var i = 0; i < 8; i++)
            text  += possible.charAt(Math.floor(+Math.random() * possible.length));        
            return text;
        }
        cy.wait(3000)
        cy.get(Document_status.DocumentID2).type('875799')
        cy.wait(3000)
    }
    static ConditionallyDischarged()
    {        
       cy.get(Document_status.Matter3).clear().type(userID_Alpha())
        function userID_Alpha()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";        
            for (var i = 0; i < 8; i++)
            text  += possible.charAt(Math.floor(+Math.random() * possible.length));        
            return text;
        }
        cy.wait(3000)
        cy.get(Document_status.DocumentID3).type('810325')
        cy.wait(3000)
    }
    static CurrentNAP()
    {        
       cy.get(Document_status.Matter4).clear().type(userID_Alpha())
        function userID_Alpha()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";        
            for (var i = 0; i < 8; i++)
            text  += possible.charAt(Math.floor(+Math.random() * possible.length));        
            return text;
        }
        cy.wait(3000)
        cy.get(Document_status.DocumentID4).type('893632')
        cy.wait(3000)
    }
    static Completed()
    {        
       cy.get(Document_status.Matter5).clear().type(userID_Alpha())
        function userID_Alpha()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";        
            for (var i = 0; i < 8; i++)
            text  += possible.charAt(Math.floor(+Math.random() * possible.length));        
            return text;
        }
        cy.wait(3000)
        cy.get(Document_status.DocumentID5).type('869473')
        cy.wait(3000)
    }
    static CurrentSIO()
    {        
       cy.get(Document_status.Matter6).clear().type(userID_Alpha())
        function userID_Alpha()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";        
            for (var i = 0; i < 8; i++)
            text  += possible.charAt(Math.floor(+Math.random() * possible.length));        
            return text;
        }
        cy.wait(3000)
        cy.get(Document_status.DocumentID6).type('871268')
        cy.wait(3000)
    }
    static Liquidation()
    {        
       cy.get(Document_status.Matter7).clear().type(userID_Alpha())
        function userID_Alpha()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";        
            for (var i = 0; i < 8; i++)
            text  += possible.charAt(Math.floor(+Math.random() * possible.length));        
            return text;
        }
        cy.wait(3000)
        cy.get(Document_status.DocumentID7).type('405183')
        cy.wait(3000)
    }
    static AutomaticallyDischarged ()
    {        
       cy.get(Document_status.Matter8).clear().type(userID_Alpha())
        function userID_Alpha()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";        
            for (var i = 0; i < 8; i++)
            text  += possible.charAt(Math.floor(+Math.random() * possible.length));        
            return text;
        }
        cy.wait(3000)
        cy.get(Document_status.DocumentID8).type('839522')
        cy.wait(3000)
    }
    static Unspecified ()
    {        
       cy.get(Document_status.Matter9).clear().type(userID_Alpha())
        function userID_Alpha()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";        
            for (var i = 0; i < 8; i++)
            text  += possible.charAt(Math.floor(+Math.random() * possible.length));        
            return text;
        }
        cy.wait(3000)
        cy.get(Document_status.DocumentID9).type('102553')
        cy.waitUntil(() =>cy.get(Document_status.Waitelement).contains('102553'),
        {
          errorMsg: 'The loading time was too long even for this crazy thing!',
          timeout: 300000,
          interval: 5000
      });
    }
    static OrderClick()
    {
        cy.get(Document_status.OrdBtn).click()
    }
    static OrderStatus()
    {
        cy.get(Document_status.OrderDetail).click()
        cy.get(Document_status.OrderStatus).should('contain','The order completed successfully.')
    }
    static OrderList()
    {
        cy.get(Document_status.Order1).should('contain','893988').and('contain','875799')
        .and('contain','810325').and('contain','893632').and('contain','869473').and('contain','871268')
        .and('contain','405183').and('contain','839522').and('contain','102553')
        
    }
}
export default NZDocumentStatus;

