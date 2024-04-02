const { registerPage } = require ("../pages/registerPage")
const { createUserDetails } = require ("../support/createUserDetails")

export const completeRegisterForm = () => {
    const user = createUserDetails()
    registerPage.firstNameField().type(user.firstName)
    registerPage.lastNameField().type(user.lastName)
    registerPage.usernameField().type(user.username)
    registerPage.passwordField().type(user.password)
    registerPage.confirmPasswordField().type(user.password)
    registerPage.submitButton().click()
    cy.wrap(user.username).as('email')
    cy.wrap(user.password).as('password')
}