// const { it } = require("mocha");

/* eslint-disable no-undef */
it('lunching localhost', () => {
  cy.visit('/');
});

it('checking for label tag', () => {
  cy.visit('/');
  cy.get('label').find('for');
});

it('checking there is a textbox', () => {
  cy.visit('/');
  cy.get('form').find('input[name=text]');
});

it('submitting a thought', () => {
  cy.visit('/');
  cy.get('form').find('input[name=text]').type('This is a thought!');
  cy.get('form').find('button').click();
  cy.url().should('include', '/form-submitted');
});
