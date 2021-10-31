describe('Fitur Sort Name 5', () => {
    it('Select Product Sauce Demo', () => {
      cy.visit('https://www.saucedemo.com')
      
  
      // Get an input, type into it and verify that the value has been updated
      cy.get('[id="user-name"]').type('problem_user')
      cy.get('input[type="password"]').type('secret_sauce')
      cy.get('[id="login-button"]').click() 
      cy.get('.inventory_list')
      cy.contains('Sauce Labs Backpack').should('be.visible')
      cy.get('.btn').first().click()
      cy.contains('Sauce Labs Bike Light').should('be.visible')
      cy.get('.btn').first().click()
      cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
      cy.get('.btn').first().click()
      cy.contains('Sauce Labs Fleece Jacket').should('be.visible')
      cy.get('.btn').first().click()
      cy.contains('Sauce Labs Onesie').should('be.visible')
      cy.get('.btn').first().click()
    })
})