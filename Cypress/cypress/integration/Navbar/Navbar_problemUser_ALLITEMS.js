context('Cypress Navar', () => {
    it('login saucedemo', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('problem_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#shopping_cart_container').click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('#inventory_sidebar_link').click()
    })
})