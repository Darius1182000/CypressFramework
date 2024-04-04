import { registerPage } from '../pages/registerPage.js'
import { dbQueries } from '../support/dbQueries.js';

describe('My First Test', () => {

  beforeEach(() => {
    registerPage.visit();
  })

  it('should successfully create an account', () => {
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
  it('should successfully create an account', () => {
    cy.queryDb(dbQueries.getUserId).then(userId => {//get the last id
      const userID = parseInt(userId[0].user_id)
      cy.completeRegisterForm({ userExists: true, userID })
    })
    //cy.completeRegisterForm({ userExists: true })
    cy.completeLoginForm()
    cy.completeUserOnboardingProcess()
    cy.queryDb(dbQueries.getUserId).then(userId => {//get the last id
      const userID = parseInt(userId[0].user_id)
      cy.dbChecksForUsers({
        userID
      })
    })
  })
})