export const loginPage = {
    visit: () => cy.visit("/"),
    usernameField: () => cy.getDataTest('signin-username'),
    passwordField: () => cy.getDataTest('signin-password'),
    signInButton: () => cy.getDataTest('signin-submit')
}