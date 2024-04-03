export const performDbChecks = {
    checkUsersTable: props => {
        const {
            userID
        } = props
        cy.queryDb(`SELECT COUNT(*) from darius.users WHERE user_id = ${userID}`
        ).then(res => {
            expect(res[0]['COUNT(*)']).to.equal(1);
        })
    }
}