import { registerPage } from '../pages/registerPage.js'

describe('My First Test', () => {

  beforeEach(() => {
    registerPage.visit();
  })

    it('should successfully create an account', () => {
      cy.completeRegisterForm()
      cy.completeLoginForm()
      cy.completeUserOnboardingProcess()
      cy.queryDb('TRUNCATE TABLE darius.users')
    })
    it('should successfully create an account', () => {
      cy.completeRegisterForm()
      cy.completeLoginForm()
      cy.completeUserOnboardingProcess()
    })
  })