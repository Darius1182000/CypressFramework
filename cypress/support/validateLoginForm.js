import { loginPage } from '../pages/loginPage'

export const validateLoginForm = () => {


    loginPage.visit()
    loginPage.signInButton().click()
    loginPage.usernameHelperText().should('have.text', 'Username is required')
    loginPage.usernameField().type('randomUsername')
    loginPage.passwordField().type('a')
    loginPage.passwordHelperText().should('have.text', 'Password must contain at least 4 characters')
    loginPage.passwordField().type('a')
    loginPage.passwordHelperText().should('have.text', 'Password must contain at least 4 characters')
    loginPage.passwordField().type('a')
    loginPage.passwordHelperText().should('have.text', 'Password must contain at least 4 characters')
    loginPage.passwordField().type('a')
    loginPage.signInButton().click()

}