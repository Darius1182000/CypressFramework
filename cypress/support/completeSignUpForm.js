import { signUpPage } from '../pages/signUpPage'
import { createUserDetails } from './createUserDetails'

export const completeSignUpForm = props => {
    const {
        userExists = false,
        userID
    } = props
    const user = createUserDetails()

    signUpPage.firstNameField().type(user.firstName)
    signUpPage.lastNameField().type(user.lastName)
    if (!userExists) {
        signUpPage.usernameField().type(user.username)
        cy.wrap(user.username).as('username')
    } else {
        cy.queryDb(`SELECT username from darius.users WHERE user_id = ${userID}`
        ).then(res => {
            signUpPage.usernameField().type(res[0].username)
            cy.wrap(res[0].username).as('username')
        })
    }
    signUpPage.passwordField().type(user.password)
    signUpPage.confirmPasswordField().type(user.password)
    signUpPage.submitButton().click()
    cy.wrap(user.firstName).as('firstName')
    cy.wrap(user.lastName).as('lastName')
    cy.wrap(user.password).as('password')

}