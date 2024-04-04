export const loginPage = {
    visit: () => cy.visit("/"),
    usernameField: () => cy.getDataTest('signin-username'),
    passwordField: () => cy.getDataTest('signin-password'),
    signInButton: () => cy.getDataTest('signin-submit'),

    usernameHelperText: () => cy.getDataId('username-helper-text'),
    passwordHelperText: () => cy.getDataId('password-helper-text')
}