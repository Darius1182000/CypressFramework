export const signInPage = {
    visit: () => cy.visit("/"),
    usernameField: () => cy.getDataTest('signin-username'),
    passwordField: () => cy.getDataTest('signin-password'),
    signInButton: () => cy.getDataTest('signin-submit'),

    signUpLink: () => cy.getDataTest('signup'),

    usernameHelperText: () => cy.getDataId('username-helper-text'),
    passwordHelperText: () => cy.getDataId('password-helper-text')
}