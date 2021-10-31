import 'cypress-file-upload';

Cypress.Commands.add('loginUser',(emailUser,passwordUser)=>{
    cy.get('input[placeholder="Nomor telepon atau email"]').type(emailUser)
    cy.get('input[placeholder="Kata sandi"]').eq(0).type(passwordUser)
    cy.get('button').contains('Masuk').click()
  })