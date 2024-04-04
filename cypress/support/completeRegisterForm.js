import { registerPage } from '../pages/registerPage'
import { createUserDetails } from '../support/createUserDetails'

export const completeRegisterForm = props => {
    const {
        userExists = false,
        userID
    } = props
    const user = createUserDetails()

    registerPage.firstNameField().type(user.firstName)
    registerPage.lastNameField().type(user.lastName)
    if (!userExists) {
        registerPage.usernameField().type(user.username)
        cy.wrap(user.username).as('username')
    } else {
        cy.queryDb(`SELECT username from darius.users WHERE user_id = ${userID}`
        ).then(res => {
            registerPage.usernameField().type(res[0].username)
            cy.wrap(res[0].username).as('username')
        })
    }
    registerPage.passwordField().type(user.password)
    registerPage.confirmPasswordField().type(user.password)
    registerPage.submitButton().click()
    cy.wrap(user.firstName).as('firstName')
    cy.wrap(user.lastName).as('lastName')
    cy.wrap(user.password).as('password')

}