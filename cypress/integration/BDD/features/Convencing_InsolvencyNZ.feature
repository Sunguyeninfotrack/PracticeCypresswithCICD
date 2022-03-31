Feature:  InsolvencyNZ Order
    As the user, I want to search and order an InsolvencyNZ

    Background:
        Given the user logins to InsolvencyNZ search page

   
    Scenario: Validation the user can search and order by Name
        When the user inputs Mater value and Search By Name
        Then the user see the list of InsolvencyNZ related to Name display 
        And the the user selects a Document related with name to Order 
        Then the user sees the Order related to Name created successfully

    
    Scenario: Validation the user can search and order by DocumentID
        When the user inputs Mater value and Search By DocumentID
        Then the user sees the document ID is generated successfully
        And the user clicks on Order to order with this DocumentID
        Then the user sees the Order related to DocumentID created successfully

  @focus
    Scenario: Validation the user can search and order by Document status
              
        When the user inputs Mater value and DocumentID with status Current Bankrupt
        And the user inputs Mater value and DocumentID with status Discharged Early 
        And the user inputs Mater value and DocumentID with status Conditionally Discharged 
        And the user inputs Mater value and DocumentID with status Current NAP 
        And the user inputs Mater value and DocumentID with status Completed
        And the user inputs Mater value and DocumentID with status Current SIO
        And the user inputs Mater value and DocumentID with status Currently in Liquidation 
        And the user inputs Mater value and DocumentID with status Automatically Discharged
        And the user inputs Mater value and DocumentID with status Unspecified
        And the user clicks on Order button to complete the Order
        And the user sees the list of document is correct
        Then the user sees the orders with these status generated successfully 

 
