Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

let faker = require('faker');
let randomUsername = faker.internet.userName();

it('Test', () => {
    cy.visit('https://rc-chat-api.rctiplus.com/test/test');

    cy.get('#username').clear();
    cy.get('#username').type('username');

    for (let i = 0; i < 10000; i++) {

        let randomChat = faker.lorem.words(2);
        cy.get('#m').clear()
        cy.get('#m').type(randomChat);
        cy.get('button').click();
    }
});