const assert = require("assert");
const app = require("../../src/app");

describe("EInvoice service", () => {
  let thisService;
  let EInvoiceCreated;

  beforeEach(async () => {
    thisService = await app.service("EInvoice");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (EInvoice)");
  });

  describe("#create", () => {
    const options = {"invoiceNumber":"new value","customerName":"new value","amount":23,"issueDate":1764689942825,"dueDate":1764689942825,"status":"new value"};

    beforeEach(async () => {
      EInvoiceCreated = await thisService.create(options);
    });

    it("should create a new EInvoice", () => {
      assert.strictEqual(EInvoiceCreated.invoiceNumber, options.invoiceNumber);
assert.strictEqual(EInvoiceCreated.customerName, options.customerName);
assert.strictEqual(EInvoiceCreated.amount, options.amount);
assert.strictEqual(EInvoiceCreated.issueDate, options.issueDate);
assert.strictEqual(EInvoiceCreated.dueDate, options.dueDate);
assert.strictEqual(EInvoiceCreated.status, options.status);
    });
  });

  describe("#get", () => {
    it("should retrieve a EInvoice by ID", async () => {
      const retrieved = await thisService.get(EInvoiceCreated._id);
      assert.strictEqual(retrieved._id, EInvoiceCreated._id);
    });
  });

  describe("#update", () => {
    let EInvoiceUpdated;
    const options = {"invoiceNumber":"updated value","customerName":"updated value","amount":100,"issueDate":null,"dueDate":null,"status":"updated value"};

    beforeEach(async () => {
      EInvoiceUpdated = await thisService.update(EInvoiceCreated._id, options);
    });

    it("should update an existing EInvoice ", async () => {
      assert.strictEqual(EInvoiceUpdated.invoiceNumber, options.invoiceNumber);
assert.strictEqual(EInvoiceUpdated.customerName, options.customerName);
assert.strictEqual(EInvoiceUpdated.amount, options.amount);
assert.strictEqual(EInvoiceUpdated.issueDate, options.issueDate);
assert.strictEqual(EInvoiceUpdated.dueDate, options.dueDate);
assert.strictEqual(EInvoiceUpdated.status, options.status);
    });
  });

  describe("#delete", () => {
  let EInvoiceDeleted;
    beforeEach(async () => {
      EInvoiceDeleted = await thisService.remove(EInvoiceCreated._id);
    });

    it("should delete a EInvoice", async () => {
      assert.strictEqual(EInvoiceDeleted._id, EInvoiceCreated._id);
    });
  });
});