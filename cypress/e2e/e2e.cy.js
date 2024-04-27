import { signUpPage } from '../pages/signUpPage.js'
import { signInPage } from '../pages/signInPage.js'
import { dbQueries } from '../support/dbQueries.js';

describe('User journeys', () => {

  beforeEach(() => {
    signUpPage.visit();
  })

  it('should successfully create an account and complete the onboarding process', () => {
    cy.completeSignUpForm({ userExists: false })
    cy.completeSignInForm()
    cy.completeUserOnboardingProcess()
    cy.queryDb(dbQueries.getUserId).then(userId => {//get the last id
      const userID = parseInt(userId[0].user_id)
      cy.dbChecksForUsers({
        userID
      })
    })
  })

  it('should successfully create a duplicate account but should not let the user to log in', () => {
    cy.queryDb(dbQueries.getUserId).then(userId => {//get the last id
      const userID = parseInt(userId[0].user_id)
      cy.completeSignUpForm({ userExists: true, userID })
    })
    cy.completeSignInForm()
    cy.contains("Username or password is invalid")
    cy.queryDb(dbQueries.getUserId).then(userId => {//get the last id
      const userID = parseInt(userId[0].user_id)
      cy.dbChecksForUsers({
        userID
      })
    })
  })

  it('should throw an error when the user logs in with invalid credentials', () => {
    signInPage.visit();
    cy.completeInvalidData()
    cy.contains("Username or password is invalid")
  })
})

describe('Form field validations', () => {

  beforeEach(() => {
    signUpPage.visit();
  })

  it('should validate signUp fields', () => {
    cy.validateSignUpForm()
  })

  it('should validate signIn fields', () => {
    cy.validateSignInForm()
  })
})