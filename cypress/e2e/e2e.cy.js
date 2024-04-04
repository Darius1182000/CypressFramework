import { registerPage } from '../pages/registerPage.js'
import { loginPage } from '../pages/loginPage.js'
import { dbQueries } from '../support/dbQueries.js';

describe('My First Test', () => {

  beforeEach(() => {
    registerPage.visit();
  })

  it('should successfully create an account and complete the onboarding process', () => {
    cy.completeRegisterForm({ userExists: false })
    cy.completeLoginForm()
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
      cy.completeRegisterForm({ userExists: true, userID })
    })
    cy.completeLoginForm()
    cy.contains("Username or password is invalid")
    cy.queryDb(dbQueries.getUserId).then(userId => {//get the last id
      const userID = parseInt(userId[0].user_id)
      cy.dbChecksForUsers({
        userID
      })
    })
  })

  it.only('should throw an error when the user logs in with invalid credentials', () => {
    loginPage.visit();
    cy.completeInvalidData()
    cy.contains("Username or password is invalid")
  })
})