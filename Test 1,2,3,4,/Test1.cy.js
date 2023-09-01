// Import Cypress commands and start the test
describe('Login Test on Guru99', () => {
  it('Successful Login', () => {
    // Access the login page
    cy.visit('https://demo.guru99.com/V4/index.php');

    // Enter the username and password
    cy.get('input[name="uid"]').type('mngr522788');
    cy.get('input[name="password"]').type('EqYvate');

    // Click the login button
    cy.get('input[name="btnLogin"]').click();

    // Verify if you are logged in successfully
    cy.url().should('include', 'Managerhomepage.php');
    cy.contains('Welcome To Manager\'s Page').should('be.visible');
  });
});
