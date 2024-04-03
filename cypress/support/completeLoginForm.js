import {loginPage} from '../pages/loginPage'

export const completeLoginForm = () => {
    cy.get("@username").then((username) => {
        loginPage.usernameField().type(username)
    })
    cy.get("@password").then((password) => {
        loginPage.passwordField().type(password)
    })
    loginPage.signInButton().click()
}