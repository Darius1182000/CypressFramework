import { registerPage } from '../pages/registerPage'


export const validateRegisterForm = () => {
    registerPage.submitButton().click()
    const clickOutsideField = () => registerPage.firstNameField().click();

    registerPage.firstNameHelperText().should('have.text', 'First Name is required')

    registerPage.lastNameField().click()
    clickOutsideField()
    registerPage.lastNameHelperText().should('have.text', 'Last Name is required')

    registerPage.usernameField().click()
    clickOutsideField()
    registerPage.usernameHelperText().should('have.text', 'Username is required')

    registerPage.passwordField().click()
    clickOutsideField()
    registerPage.passwordHelperText().should('have.text', 'Enter your password')

    registerPage.confirmPasswordField().click()
    clickOutsideField()
    registerPage.confirmPasswordHelperText().should('have.text', 'Confirm your password')

    registerPage.firstNameField().type("randomFirstName")
    registerPage.lastNameField().type("randomLastName")
    registerPage.usernameField().type("randomUsername")
    registerPage.passwordField().type("randomPassword")
    registerPage.confirmPasswordField().type("randomDifferentPassword")
    registerPage.confirmPasswordHelperText().should('have.text', 'Password does not match')
    registerPage.confirmPasswordField().type('{selectall}{backspace}')
    registerPage.confirmPasswordField().type("randomPassword")
    registerPage.submitButton().click()
}