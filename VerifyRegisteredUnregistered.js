/// <reference types="Cypress" />

import ECommercePage from '../../support/PageObjects/ECommerce.js'

describe('E-commerce Automation Web Application', function(){
    const eCommercePage = new ECommercePage
    before(() => {
        cy.visit(Cypress.env("qaEnv"))

    })

    beforeEach(() => {
        cy.fixture('EcommerceData').then(function(data){
            this.data = data
        })
    })

    it('Verify if user can add product to the cart and checkout while logged in', function(){

        

        eCommercePage.showMenu().invoke('show')
        eCommercePage.clickBlouses().click({force: true})
        eCommercePage.blousesAssertion().should('include.text', 'Blouses')

        eCommercePage.showAddtoCart().invoke('show')
        eCommercePage.clickAddtoCart().click({force: true})

        eCommercePage.productAddedAssertion().should('include.text', 'Product successfully added')

        eCommercePage.popupProceedtoCheckout().click()

        eCommercePage.cartSummaryAssertion().should('include.text', 'Shopping-cart summary')

        eCommercePage.totalPriceAssertion().should('have.text', '$29.00')

        eCommercePage.summaryProceedtoCheckout().click()

        eCommercePage.signInPageAssertion().should('include.text', 'Authentication')

        eCommercePage.emailIDsignIn().type(this.data.email)
        
        eCommercePage.createACCButton().click()

        eCommercePage.olError().then(($errMessage) => {

            if ($errMessage.text().includes('An account using this email address has already been registered.')) {
  
                eCommercePage.signInEmail().type(this.data.email)
                eCommercePage.signInPassword().type(this.data.password)
                eCommercePage.signInButton().click()

                eCommercePage.shippingAddressAssertion().should('include.text', 'Addresses')

                eCommercePage.addressProceedButton().click()

                eCommercePage.addressPageAssertion().should('include.text', 'Shipping')

                eCommercePage.agreementCheckBox().check().should('be.checked')

                eCommercePage.paymentProceedtoCheckout().click()

                eCommercePage.paymentMethodAssertion().should('include.text', 'Please choose your payment method')

                eCommercePage.totalPriceWhileSignIn().should('include.text', '$29.00')

                eCommercePage.payBankWireorCard().click()

                eCommercePage.orderSummaryPageAssertion().contains('Order summary')

                eCommercePage.confirmMyOrderButton().click()

                eCommercePage.completeOrderPageAssertion().should('include.text', 'Your order on My Store is complete.')
                 
            }
        })
    })
    // it('As a user add an item to the cart and then edit it. Verify that the customer can change the contents of the cart', function(){
    
    // })
    it('Verify that the customer is unable to make a purchase when not logged in.', function(){

        eCommercePage.showMenu().invoke('show')
        eCommercePage.clickBlouses().click({force: true})
        eCommercePage.blousesAssertion().should('include.text', 'Blouses')

        eCommercePage.showAddtoCart().invoke('show')
        eCommercePage.clickAddtoCart().click({force: true})

        eCommercePage.productAddedAssertion().should('include.text', 'Product successfully added')

        eCommercePage.popupProceedtoCheckout().click()

        eCommercePage.cartSummaryAssertion().should('include.text', 'Shopping-cart summary')

        eCommercePage.totalPriceAssertion().should('have.text', '$29.00')

        eCommercePage.summaryProceedtoCheckout().click()

        eCommercePage.signInPageAssertion().should('include.text', 'Authentication')
    
    })

    it('Verify that a registered user gets an message stating email address has already been registered when trying to register again.', function(){
    
        eCommercePage.showMenu().invoke('show')
        eCommercePage.clickBlouses().click({force: true})
        eCommercePage.blousesAssertion().should('include.text', 'Blouses')

        eCommercePage.showAddtoCart().invoke('show')
        eCommercePage.clickAddtoCart().click({force: true})

        eCommercePage.productAddedAssertion().should('include.text', 'Product successfully added')

        eCommercePage.popupProceedtoCheckout().click()

        eCommercePage.cartSummaryAssertion().should('include.text', 'Shopping-cart summary')

        eCommercePage.totalPriceAssertion().should('have.text', '$29.00')

        eCommercePage.summaryProceedtoCheckout().click()

        eCommercePage.signInPageAssertion().should('include.text', 'Authentication')

        eCommercePage.emailIDsignIn().type(this.data.email)
        
        eCommercePage.createACCButton().click()

        eCommercePage.errorMessageACCRegistered().should('include.text', 'An account using this email address has already been registered.' )

    })

    
       
})
