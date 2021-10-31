context ('Saucedemo Login Test', () =>{
    it('Login Saucedemo', () =>{
        cy.visit('https://saucedemo.com')
        cy.get('[id="user-name"]').type('Nazario')
        cy.get('input[type="password"]').type('1941720233')
        cy.get('[id="login-button"]').click()
    })
})