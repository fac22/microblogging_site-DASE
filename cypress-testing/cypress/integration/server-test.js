// const { it } = require("mocha");

/* eslint-disable no-undef */

it('launching localhost', () => {
  cy.visit('/');
});

// Accessibility tests

it('should have a title', () => {
  cy.title().should('eq', 'Shortlr');
});

it('should have a label tag', () => {
  cy.visit('/');
  cy.get('label').find('for');
});

it('should have a textbox', () => {
  cy.visit('/');
  cy.get('form').find('input[name=text]');
});

// Functionality tests

it('submits a thought', () => {
  cy.visit('/');
  cy.get('form').find('input[name=text]').type('This is a thought!');
  cy.get('form').find('button').click();
  cy.url().should('include', '/form-submitted');
});

it('can display a submitted thought', () => {
  cy.visit('/');
  cy.get('form').find('input[name=text]').type('I can see my post!');
  cy.get('form').find('button').click();
  cy.get('div').contains('I can see my post!');
});

it('can delete a submitted thought', () => {
  cy.visit('/');
  cy.get('form').find('input[name=text]').type('I made a mistake!');
  cy.get('form').find('button').click();
  cy.get('div').find('button #delete').click();
});

it('rejects a thought that is too long', () => {
  cy.visit('/');
  cy.get('form')
    .find('input[name=text]')
    .type(
      'I have never been able to put all of my thoughts into such a small text field and I do not intend to start now!'
    );
  cy.get('form').find('button').click();
  cy.url().should('include', 'error');
});
