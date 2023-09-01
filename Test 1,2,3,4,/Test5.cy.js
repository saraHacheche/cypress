describe('Test de autentificare, creare client nou și conectare pe Guru99', () => {
  it('Autentificare, creare client nou și conectare cu succes', () => {
   
    cy.visit('https://demo.guru99.com/V4/index.php');

    cy.get('input[name="uid"]').type('mngr522788');
    cy.get('input[name="password"]').type('EqYvate');

    cy.get('input[name="btnLogin"]').click();

    cy.url().should('include', 'Managerhomepage.php');
    cy.contains('Welcome To Manager\'s Page').should('be.visible');

    cy.get('a[href="addcustomerpage.php"]').click(); 

    // Introduceți datele clientului nou
    cy.get('input[name="name"]').type('Dorin Avram');
    cy.get('input[name="dob"]').type('2004-03-17');
    cy.get('textarea[name="addr"]').type('1295 Rocheleau');
    cy.get('input[name="city"]').type('Montreal');
    cy.get('input[name="state"]').type('Canada');
    cy.get('input[name="pinno"]').type('1799447');
    cy.get('input[name="telephoneno"]').type('123755589');
    cy.get('input[name="emailid"]').type('doddtigdsfn@gmail.com');
    cy.get('input[name="password"]').type('127534789');
    
    cy.get('input[name="sub"]').click();

});
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
