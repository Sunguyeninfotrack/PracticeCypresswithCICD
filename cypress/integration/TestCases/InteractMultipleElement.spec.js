

describe('Example to demonstrate the use each in Cypress', function () {
    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it('Validate successful Login', function () {
        cy.get('#txtUsername').type(this.testdata.username)
        cy.get('#txtPassword').type(this.testdata.password)
        cy.get('#btnLogin').click()
        cy.get('#welcome').contains(this.testdata.welcomeText)
    })

    it('Validate all the Quick Launch Texts', function () {
        cy.get('.quickLaunge').each(($el, index) => {
            expect($el).to.contain(this.testdata.quickLaunch[index])
        })
    })

 
})