// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { completeRegisterForm } = require ("./completeRegisterForm")
const { completeLoginForm } = require ("./completeLoginForm")
const { completeUserOnboardingProcess } = require ("./completeUserOnboardingProcess")

Cypress.Commands.add ('getDataTest', (id, options = {}) => {
    cy.get(`[data-test="${id}"]`, options)
})

Cypress.Commands.add ('completeRegisterForm', () => {
    completeRegisterForm()
})

Cypress.Commands.add ('completeLoginForm', () => {
    completeLoginForm()
})

Cypress.Commands.add ('completeUserOnboardingProcess', () => {
    completeUserOnboardingProcess()
})