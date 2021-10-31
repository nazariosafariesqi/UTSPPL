context('Cypress Navar', () => {
    it('login saucedemo', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('#reset_sidebar_link').click()
    })
})