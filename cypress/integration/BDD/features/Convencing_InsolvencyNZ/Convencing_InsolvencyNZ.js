import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
/// <reference types="cypress" />
/// <reference types='cypress-tags' />
import 'cypress-wait-until'
import LoginInsovency from '../../../../support/InsolvencyNZ/InsolvencyNZ_Account'
import NZNameObject from '../../../../support/InsolvencyNZ/InsolvencyNZ_Name'
import NZDocumentObject from '../../../../support/InsolvencyNZ/InsolvencyNZ_DocumentID'
import NZDocumentStatus from '../../../../support/InsolvencyNZ/InsolvencyNZ_DocumenStatus'
beforeEach(() =>
{
    Given ("the user logins to InsolvencyNZ search page",function() {
		LoginInsovency.homepageInsovency()
		LoginInsovency.loginInsovency()
		LoginInsovency.SubmitInsovency()
    });    
});


// Scenario 1: Validation the user can search and order by Name

When("the user inputs Mater value and Search By Name",function(){
	NZNameObject.SearchName()
});
Then("the user see the list of InsolvencyNZ related to Name display",function(){
	NZNameObject.List()
});
And("the the user selects a Document related with name to Order",function(){
	NZNameObject.SelectName()
	NZNameObject.OrderClick()
});
Then("the user sees the Order related to Name created successfully",function(){
	NZNameObject.OrderStatus()
});


// Scenario 2: Validation the user can search and order by DocumentID

When("the user inputs Mater value and Search By DocumentID",function(){
	NZDocumentObject.SearchDocument()	 
});
Then("the user sees the document ID is generated successfully",function(){
	NZDocumentObject.Documentdisplay()
});
And("the user clicks on Order to order with this DocumentID",function(){
	NZDocumentObject.OrderClick()
});
Then("the user sees the Order related to DocumentID created successfully",function(){
	NZDocumentObject.OrderStatus()
});

// Scenario 3: Validation the user can search and order by Document status

When("the user inputs Mater value and DocumentID with status Current Bankrupt",function(){
	NZDocumentStatus.Bankrupt()
});
And("the user inputs Mater value and DocumentID with status Discharged Early",function(){
	NZDocumentStatus.DischargedEarly()
});
And("the user inputs Mater value and DocumentID with status Conditionally Discharged",function(){
	NZDocumentStatus.ConditionallyDischarged()
});
And("the user inputs Mater value and DocumentID with status Current NAP",function(){
	NZDocumentStatus.CurrentNAP()	 
});
And("the user inputs Mater value and DocumentID with status Completed",function(){
	NZDocumentStatus.Completed() 
});
And("the user inputs Mater value and DocumentID with status Current SIO",function(){
	NZDocumentStatus.CurrentSIO() 
});
And("the user inputs Mater value and DocumentID with status Currently in Liquidation",function(){
	NZDocumentStatus.Liquidation() 
});
And("the user inputs Mater value and DocumentID with status Automatically Discharged",function(){
	NZDocumentStatus.AutomaticallyDischarged() 
});
And("the user inputs Mater value and DocumentID with status Unspecified",function(){
	NZDocumentStatus.Unspecified() 
});
And("the user clicks on Order button to complete the Order",function(){
	NZDocumentStatus.OrderClick()
});
And("the user sees the list of document is correct",function(){	
	NZDocumentStatus.OrderList()
});
Then("the user sees the orders with these status generated successfully",function(){	 
	NZDocumentStatus.OrderStatus()
});

afterEach(() => {
	cy.window().then(win => {
		// window.gc is enabled with --js-flags=--expose-gc chrome flag
		if (typeof win.gc === 'function') {
			// run gc multiple times in an attempt to force a major GC between tests
			win.gc();
			win.gc();
			win.gc();
			win.gc();
			win.gc();
		}
	});
	cy.log('Execute finished')
});