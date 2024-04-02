import { registerPage } from '../pages/registerPage.js'

describe('My First Test', () => {

  beforeEach(() => {
    registerPage.visit();
  })

    it('should successfully create an account', () => {
      cy.completeRegisterForm()
      cy.completeLoginForm()
      cy.completeUserOnboardingProcess()
    })
    it('should successfully create an account', () => {
      cy.completeRegisterForm()
      cy.completeLoginForm()
      cy.completeUserOnboardingProcess()
    })
  })