import { Given, When, Then } from '@cucumber/cucumber';
import { enterVehicleData, enterInsurantData, enterProductData, selectPriceOption, sendQuote, verifySuccessMessage } from '../../pages/formPage';

Given('I am on the {string} page', (page) => {
    cy.visit(`/`);
    cy.get('h1').contains(page).should('be.visible');
});

When('I fill in the vehicle data and press next', () => {
    enterVehicleData();
    cy.get('#nextenterinsurantdata').should('be.visible').click(); // Verifica e clica no botão Next
});

When('I fill in the insurant data and press next', () => {
    enterInsurantData();
    cy.get('#nextenterproductdata').should('be.visible').click(); // Verifica e clica no botão Next
});

When('I fill in the product data and press next', () => {
    enterProductData();
    cy.get('#nextselectpriceoption').should('be.visible').click(); // Verifica e clica no botão Next
});

When('I select the price option and press next', () => {
    selectPriceOption();
    cy.get('#nextsendquote').should('be.visible').click(); // Verifica e clica no botão Next
});

When('I send the quote', () => {
    sendQuote();
    cy.get('#sendemail').should('be.visible').click(); // Verifica e clica no botão Send
});

Then('I should see {string}', (message) => {
    cy.get('.sweet-alert').should('be.visible').and('contain.text', message);
});
