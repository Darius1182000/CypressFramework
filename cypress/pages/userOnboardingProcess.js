export const userOnboardingProcess = {
    nextButton: () => cy.getDataTest('user-onboarding-next'),
    bankNameField: () => cy.getDataTest('bankaccount-bankName-input'),
    routingNumberField: () => cy.getDataTest('bankaccount-routingNumber-input'),
    accountNumberField: () => cy.getDataTest('bankaccount-accountNumber-input'),
    submitButton: () => cy.getDataTest('bankaccount-submit'),
    doneButton: () => cy.getDataTest('user-onboarding-next')
}
