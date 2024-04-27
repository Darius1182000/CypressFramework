import { signUpPage } from '../pages/signUpPage'


export const validateSignUpForm = () => {
    signUpPage.submitButton().click()
    const clickOutsideField = () => signUpPage.firstNameField().click();

    signUpPage.firstNameHelperText().should('have.text', 'First Name is required')

    signUpPage.lastNameField().click()
    clickOutsideField()
    signUpPage.lastNameHelperText().should('have.text', 'Last Name is required')

    signUpPage.usernameField().click()
    clickOutsideField()
    signUpPage.usernameHelperText().should('have.text', 'Username is required')

    signUpPage.passwordField().click()
    clickOutsideField()
    signUpPage.passwordHelperText().should('have.text', 'Enter your password')

    signUpPage.confirmPasswordField().click()
    clickOutsideField()
    signUpPage.confirmPasswordHelperText().should('have.text', 'Confirm your password')

    signUpPage.firstNameField().type("randomFirstName")
    signUpPage.lastNameField().type("randomLastName")
    signUpPage.usernameField().type("randomUsername")
    signUpPage.passwordField().type("randomPassword")
    signUpPage.confirmPasswordField().type("randomDifferentPassword")
    signUpPage.confirmPasswordHelperText().should('have.text', 'Password does not match')
    signUpPage.confirmPasswordField().type('{selectall}{backspace}')
    signUpPage.confirmPasswordField().type("randomPassword")
    signUpPage.submitButton().click()
}