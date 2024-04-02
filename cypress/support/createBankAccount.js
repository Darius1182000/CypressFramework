import { faker } from "@faker-js/faker"

export const createBankAccount = () => {
    const bankName = faker.finance.accountName()
    const routingNumber = faker.finance.routingNumber()
    const accountNumber = faker.finance.accountNumber(9)

    return {
        bankName,
        routingNumber,
        accountNumber,
    }
}