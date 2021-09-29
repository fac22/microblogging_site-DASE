// const { it } = require("mocha");

/* eslint-disable no-undef */

it('launching localhost', () => {
  cy.visit('/');
});

// Accessibility tests

it('should have a title', () => {
  cy.visit('/');
  cy.title().should('eq', 'Shortlr');
});

it('should have a title in the /add-post', () => {
  cy.visit('/add-post');
  cy.title().should('eq', 'Shortlr');
});

it('should have a label tag', () => {
  cy.visit('/add-post');
  cy.get('form').find('label[for=name]');
  cy.get('form').find('label[for=post]');
});

it('should have a textbox', () => {
  cy.visit('/add-post');
  cy.get('form').find('input[name=post]');
});

// Functionality tests

it('submits a thought', () => {
  cy.visit('/add-post');
  cy.get('form').find('input[name=post]').type('This is a thought!');
  cy.get('form').find('button').click();
  cy.url().should('include', '/');
});

it('can display a submitted thought', () => {
  cy.visit('/add-post');
  cy.get('form').find('input[name=post]').type('I can see my post!');
  cy.get('form').find('button').click();
  cy.visit('/');
  cy.get('div').contains('I can see my post!');
});

it('can delete a submitted thought', () => {
  cy.visit('/add-post');
  cy.get('form').find('input[name=post]').type('I made a mistake!');
  cy.get('form').find('button').click();
  cy.visit('/');
  cy.get('div').find('.delete').click();
});

it('rejects a thought that is too long', () => {
  cy.visit('/add-post');
  cy.get('form')
    .find('input[name=post]')
    .type(
      'I have never been able to put all of my thoughts into such a small text field and I do not intend to start now!',
    );
  cy.get('form').find('button').click();
  cy.url().should('include', '/error');
});
