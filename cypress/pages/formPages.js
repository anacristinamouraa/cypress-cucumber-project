export const enterVehicleData = () => {
    cy.get('#make').should('be.visible').select('Audi');
    cy.get('#model').should('be.visible').select('Audi A8');
    // Continue preenchendo e verificando os campos restantes
};

export const enterInsurantData = () => {
    cy.get('#firstname').should('be.visible').type('John');
    cy.get('#lastname').should('be.visible').type('Doe');
    // Continue preenchendo e verificando os campos restantes
};

export const enterProductData = () => {
    cy.get('#startdate').should('be.visible').type('01/01/2024');
    // Continue preenchendo e verificando os campos restantes
};

export const selectPriceOption = () => {
    cy.get('#selectsilver').should('be.visible').click();
};

export const sendQuote = () => {
    cy.get('#email').should('be.visible').type('john.doe@example.com');
    cy.get('#phone').should('be.visible').type('1234567890');
    // Continue preenchendo e verificando os campos restantes
};
