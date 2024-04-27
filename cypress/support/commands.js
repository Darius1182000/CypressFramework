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

const { completeSignUpForm } = require("./completeSignUpForm")
const { completeSignInForm } = require("./completeSignInForm")
import { completeInvalidData } from './completeSignInForm'
const { completeUserOnboardingProcess } = require("./completeUserOnboardingProcess")
import { performDbChecks } from './performDbChecks'//all the imports should be like this
import {validateSignUpForm} from './validateSignUpForm'
import {validateSignInForm} from './validateSignInForm'

Cypress.Commands.add('getDataTest', (id, options = {}) => {
    cy.get(`[data-test="${id}"]`, options)
})

Cypress.Commands.add('getDataId', (id, options = {}) => {
    cy.get(`[id="${id}"]`, options)
})

Cypress.Commands.add('completeSignUpForm', props => {
    completeSignUpForm(props)
})

Cypress.Commands.add('completeInvalidData', () => {
    completeInvalidData()
})

Cypress.Commands.add('completeSignInForm', () => {
    completeSignInForm()
})

Cypress.Commands.add('validateSignUpForm', () => {
    validateSignUpForm()
})

Cypress.Commands.add('validateSignInForm', () => {
    validateSignInForm()
})

Cypress.Commands.add('completeUserOnboardingProcess', () => {
    completeUserOnboardingProcess()
})

Cypress.Commands.add('queryDb', query => {
    cy.task('queryDb', query)
})

Cypress.Commands.add('dbChecksForUsers', props => {
    performDbChecks.checkUsersTable(props)
})