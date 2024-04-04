const { registerPage } = require("../pages/registerPage")
const { createUserDetails } = require("../support/createUserDetails")

export const completeRegisterForm = props => {
    const {
        userExists = false,
        userID
    } = props
    const user = createUserDetails()
    if (!userExists) {
        //const user = createUserDetails()
        registerPage.firstNameField().type(user.firstName)
        registerPage.lastNameField().type(user.lastName)
        registerPage.usernameField().type(user.username)
        registerPage.passwordField().type(user.password)
        registerPage.confirmPasswordField().type(user.password)
        registerPage.submitButton().click()
        cy.wrap(user.firstName).as('firstName')
        cy.wrap(user.lastName).as('lastName')
        cy.wrap(user.username).as('username')
        cy.wrap(user.password).as('password')
    } else {

        registerPage.firstNameField().type(user.firstName)
        registerPage.lastNameField().type(user.lastName)

        cy.queryDb(`SELECT username from darius.users WHERE user_id = ${userID}`
        ).then(res => {
        registerPage.usernameField().type(res[0].username)
        cy.wrap(res[0].username).as('username')

        })

        registerPage.passwordField().type(user.password)
        registerPage.confirmPasswordField().type(user.password)
        registerPage.submitButton().click()
        cy.wrap(user.firstName).as('firstName')
        cy.wrap(user.lastName).as('lastName')
        //cy.wrap(user.username).as('username')
        cy.wrap(user.password).as('password')
    }
}