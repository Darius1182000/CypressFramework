export const registerPage = {
    visit: () => cy.visit(Cypress.config().baseUrl.replace('signin', 'signup')),
    firstNameField: () => cy.getDataTest('signup-first-name'),
    lastNameField: () => cy.getDataTest('signup-last-name'),
    usernameField: () => cy.getDataTest('signup-username'),
    passwordField: () => cy.getDataTest('signup-password'),
    confirmPasswordField: () => cy.getDataTest('signup-confirmPassword'),
    submitButton: () => cy.getDataTest('signup-submit'),

    firstNameHelperText: () => cy.getDataId('firstName-helper-text'),
    lastNameHelperText: () => cy.getDataId('lastName-helper-text'),
    usernameHelperText: () => cy.getDataId('username-helper-text'),
    passwordHelperText: () => cy.getDataId('password-helper-text'),
    confirmPasswordHelperText: () => cy.getDataId('confirmPassword-helper-text')
}