
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
invoiceNumber: faker.lorem.sentence(""),
customerName: faker.lorem.sentence(""),
amount: faker.lorem.sentence(""),
issueDate: faker.lorem.sentence(""),
dueDate: faker.lorem.sentence(""),
status: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
