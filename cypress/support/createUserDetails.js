import { faker } from "@faker-js/faker"

export const createUserDetails = () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const username = `${firstName}${faker.number.int({
        min: 1000,
        max: 9999
    })}`
    const password = faker.internet.password()

    return {
        firstName,
        lastName,
        username,
        password
    }
}