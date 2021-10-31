const fileName = 'visa.png';
cy.fixture(fileName).then(fileContent => {
     cy.get('input[id="file"]')
       .upload({ fileContent, fileName, mimeType: 'image/png' });
  });