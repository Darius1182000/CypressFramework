import { signInPage } from '../pages/signInPage'

export const validateSignInForm = () => {

    signInPage.signInButton().click()
    signInPage.usernameHelperText().should('have.text', 'Username is required')
    signInPage.usernameField().type('randomUsername')
    signInPage.passwordField().type('a')
    signInPage.passwordHelperText().should('have.text', 'Password must contain at least 4 characters')
    signInPage.passwordField().type('a')
    signInPage.passwordHelperText().should('have.text', 'Password must contain at least 4 characters')
    signInPage.passwordField().type('a')
    signInPage.passwordHelperText().should('have.text', 'Password must contain at least 4 characters')
    signInPage.passwordField().type('a')
    signInPage.signInButton().click()

}