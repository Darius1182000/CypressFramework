import { registerPage } from '../pages/registerPage.js'
import { dbQueries } from '../support/dbQueries.js';

describe('My First Test', () => {

  beforeEach(() => {
    registerPage.visit();
  })

    it('should successfully create an account', () => {
      cy.completeRegisterForm()
      cy.completeLoginForm()
      cy.completeUserOnboardingProcess()
      cy.queryDb(dbQueries.getUserId).then(userId => {//get the last id
        const userID = parseInt(userId[0].user_id)
        cy.dbChecksForUsers({
          userID
        })
        //command to use userID
      })
    })
    it('should successfully create an account', () => {
      cy.completeRegisterForm()
      cy.completeLoginForm()
      cy.completeUserOnboardingProcess()
    })
  })