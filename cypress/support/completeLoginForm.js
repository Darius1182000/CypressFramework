import {loginPage} from '../pages/loginPage'

export const completeLoginForm = () => {
    cy.get("@email").then((email) => {
        loginPage.usernameField().type(email)
    })
    cy.get("@password").then((password) => {
        loginPage.passwordField().type(password)
    })
    loginPage.signInButton().click()
}