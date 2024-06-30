import { signInPage } from '../pages/signInPage'

export const validateSignInForm = () => {

    signInPage.signInButton().click()
    signInPage.usernameHelperText().should('have.text', 'Username is required')
    signInPage.usernameField().type('randomUsername1@').then(()=>{
        cy.get('[name="username"]').invoke('val').then((value) => {
            console.log(value)
            expect(containsSpecialChars(value)).to.be.true
            expect(containsNumbers(value)).to.be.true
            expect(containsUpperChars(value)).to.be.true

        });
    })

    // cy.get('[data-test="signin-username"]').should('have.value').invoke('val').then((value) => {
    //     console.log(value)
    //     expect(containsSpecialChars(value)).to.be.true
    // });

    signInPage.passwordField().type('a')
    signInPage.passwordHelperText().should('have.text', 'Password must contain at least 4 characters')
    signInPage.passwordField().type('a')
    signInPage.passwordHelperText().should('have.text', 'Password must contain at least 4 characters')
    signInPage.passwordField().type('a')
    signInPage.passwordHelperText().should('have.text', 'Password must contain at least 4 characters')
    signInPage.passwordField().type('a')
    signInPage.signInButton().click()

}

function containsSpecialChars(input) {
    const regex = /[^a-zA-Z0-9]/;
    return regex.test(input);
}

function containsNumbers(input) {
    const regex = /[0-9]/; // Matches any digit from 0 to 9
    return regex.test(input);
}

function containsUpperChars(input) {
    const regex = /[A-Z]/; // Matches any uppercase letter from A to Z
    return regex.test(input);
}