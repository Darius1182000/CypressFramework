import { loginPage } from '../pages/loginPage'
import { createUserDetails } from '../support/createUserDetails'

export const completeLoginForm = () => {
    cy.get("@username").then((username) => {
        loginPage.usernameField().type(username)
    })
    cy.get("@password").then((password) => {
        loginPage.passwordField().type(password)
    })
    loginPage.signInButton().click()
}

export const completeInvalidData = () => {
    const user = createUserDetails()
    loginPage.usernameField().type(user.username)
    loginPage.passwordField().type(user.password)
    loginPage.signInButton().click()
}