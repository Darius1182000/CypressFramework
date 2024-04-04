export const performDbChecks = {
    checkUsersTable: props => {
        const {
            userID
        } = props
        cy.queryDb(`SELECT COUNT(*) from darius.users WHERE user_id = ${userID}`
        ).then(res => {
            expect(res[0]['COUNT(*)']).to.equal(1);
        })
        cy.queryDb(`SELECT firstName, lastName, username from darius.users WHERE user_id = ${userID}`
        ).then(res => {
            cy.get("@firstName").then((firstName) => {
                expect(res[0].firstName).to.equal(firstName);
            });
            cy.get("@lastName").then((lastName) => {
                expect(res[0].lastName).to.equal(lastName);
            });
            cy.get("@username").then((username) => {
                expect(res[0].username).to.equal(username);
            });
        })
    }
}