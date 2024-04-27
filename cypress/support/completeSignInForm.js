import { signInPage } from '../pages/signInPage'
import { createUserDetails } from './createUserDetails'

export const completeSignInForm = () => {
    cy.get("@username").then((username) => {
        signInPage.usernameField().type(username)
    })
    cy.get("@password").then((password) => {
        signInPage.passwordField().type(password)
    })
    signInPage.signInButton().click()
}

export const completeInvalidData = () => {
    const user = createUserDetails()
    signInPage.usernameField().type(user.username)
    signInPage.passwordField().type(user.password)
    signInPage.signInButton().click()
}