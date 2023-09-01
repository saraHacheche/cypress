// Import Cypress commands and start the test
describe('Authentication Test with Incorrect Credentials on Guru99', () => {
  it('Failed Authentication with Incorrect Credentials', () => {
    // Access the login page
    cy.visit('https://demo.guru99.com/V4/index.php');

    // Enter an incorrect username and password
    cy.get('input[name="uid"]').type('incorrect_user');
    cy.get('input[name="password"]').type('incorrect_password');

    // Click the login button
    cy.get('input[name="btnLogin"]').click();

    // Verify the display of an error message with an increased timeout
    cy.contains('User or Password is not valid', { timeout: 10000 }).should('be.visible');

    // Click the "OK" button in the error message
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('User or Password is not valid');
    });

    // Verify that you are redirected back to the login page
    cy.url().should('include', 'index.php');
  });
});
