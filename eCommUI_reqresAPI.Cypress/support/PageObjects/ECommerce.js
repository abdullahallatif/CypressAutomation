class ECommerce
{
    showMenu()
    { 
        return cy.get('.sf-menu > :nth-child(1)')
    }

    clickBlouses()
    {
        return cy.contains('Blouses')
    }

    blousesAssertion()
    {
        return cy.get('.cat-name')
    }

    showAddtoCart()
    {
        return cy.get('.product-container')
    }

    clickAddtoCart()
    {
        return cy.contains('Add to cart')
    }

    productAddedAssertion()
    {
        return cy.get('.layer_cart_product > h2')
    }

    popupProceedtoCheckout()
    {
        return cy.get('a.btn.btn-default.button.button-medium')
    }

    cartSummaryAssertion()
    {
        return cy.get('#cart_title')
    }

    totalPriceAssertion()
    {
        return cy.get('#total_price')
    }

    summaryProceedtoCheckout()
    {
        return cy.get('.cart_navigation > .button > span')
    }

    signInPageAssertion()
    {
        return cy.get('.page-heading')
    }

    emailIDsignIn()
    {
        return cy.get('#email_create')
    }

    createACCButton()
    {
        return cy.get('#SubmitCreate > span')
    }

    olError()
    { 
        return cy.get('ol')
    }


    signInEmail()
    {
        return cy.get('#email')
    }

    signInPassword()
    {
        return cy.get('#passwd')
    }

    signInButton()
    {
        return cy.get('#SubmitLogin')
    }

    shippingAddressAssertion()
    {
        return cy.get('.page-heading')
    }

    addressProceedButton()
    {
        return cy.get('.cart_navigation > .button > span')
    }

    addressPageAssertion()
    {
        return cy.get('.page-heading')
    }

    agreementCheckBox()
    {
        return cy.get('#cgv')
    }

    paymentProceedtoCheckout()
    {
        return cy.get('.cart_navigation > .button > span')
    }

    paymentMethodAssertion()
    {
        return cy.get('.page-heading')
    }

    totalPriceWhileSignIn()
    {
        return cy.get('#total_price')
    }

    payBankWireorCard()
    {
        return cy.get('.bankwire')
    }

    orderSummaryPageAssertion()
    {
        return cy.get('.page-heading')
    }

    confirmMyOrderButton()
    {
        return cy.get('#cart_navigation > .button > span')
    }

    completeOrderPageAssertion()
    {
        return cy.get('.cheque-indent > .dark')
    }

    errorMessageACCRegistered()
    {
        return cy.get('ol > li')
    }

}
export default ECommerce;