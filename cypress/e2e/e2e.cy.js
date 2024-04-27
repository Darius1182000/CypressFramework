import { signUpPage } from '../pages/signUpPage.js'
import { signInPage } from '../pages/signInPage.js'
import { dbQueries } from '../support/dbQueries.js'
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from '../pages/routes.js'

describe('User journeys', () => {

  beforeEach(() => {
    signUpPage.visit();
  })

  after(() =>{
    cy.queryDb(dbQueries.truncateUsers)
  })

  it('should successfully create an account and complete the onboarding process', () => {
    cy.url().should('include', SIGN_UP_ROUTE)
    cy.completeSignUpForm({ userExists: false })
    cy.url().should('include', SIGN_IN_ROUTE)
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
      cy.url().should('include', SIGN_UP_ROUTE)
      cy.completeSignUpForm({ userExists: true, userID })
    })
    cy.url().should('include', SIGN_IN_ROUTE)
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
    cy.url().should('include', SIGN_IN_ROUTE)
    cy.completeInvalidData()
    cy.contains("Username or password is invalid")
  })
})

describe('Form field validations', () => {

  beforeEach(() => {
    signUpPage.visit();
  })

  it('should validate signUp fields', () => {
    cy.url().should('include', SIGN_UP_ROUTE)
    cy.validateSignUpForm()
  })

  it('should validate signIn fields', () => {
    signInPage.visit()
    cy.url().should('include', SIGN_IN_ROUTE)
    cy.validateSignInForm()
  })
})