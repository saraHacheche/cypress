// Importați comenzi Cypress și începeți testul
describe('Verificare confirmare date de autentificare noi', () => {
  it('Introduceți o adresă de email și faceți clic pe submit', () => {
    // Accesați pagina principală a site-ului Guru99
    cy.visit('https://demo.guru99.com/');

    // Introduceți o adresă de email într-un câmp
    cy.get('input[name="emailid"]').type('exemplu@example.com'); // Înlocuiți selectorul și adresa de email cu cele reale

    // Faceți clic pe butonul de submit sau echivalentul acestuia
    cy.get('input[name="btnLogin"]').click(); // Înlocuiți selectorul cu cel real

    // Verificați afișarea unui mesaj de confirmare sau succes
    cy.contains('Access details to demo site.').should('be.visible'); // Înlocuiți mesajul cu cel real
  });
});
