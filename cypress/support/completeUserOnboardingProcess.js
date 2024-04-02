const { createBankAccount } = require ("../support/createBankAccount")
const { userOnboardingProcess } = require ("../pages/userOnboardingProcess")

export const completeUserOnboardingProcess = () => {
    const user = createBankAccount()
    cy.contains("Get Started with Real World App", { timeout: 6000 })
    userOnboardingProcess.nextButton().click()
    userOnboardingProcess.bankNameField().type(user.bankName)
    userOnboardingProcess.routingNumberField().type(user.routingNumber)
    userOnboardingProcess.accountNumberField().type(user.accountNumber)
    userOnboardingProcess.submitButton().click()
    cy.contains("You're all set!", { timeout: 6000 })
    userOnboardingProcess.doneButton().click()
}