
    module.exports = function (app) {
        const modelName = "e_invoice";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            invoiceNumber: { type:  String , required: true, comment: "Invoice Number, p, false, false, false, true, false, false, false, , , , ," },
customerName: { type:  String , comment: "Customer Name, p, false, false, false, true, false, false, false, , , , ," },
amount: { type: Number, comment: "Amount, p_number, false, false, false, true, false, false, false, , , , ," },
issueDate: { type: Date, comment: "Issue Date, p_date, false, false, false, true, false, false, false, , , , ," },
dueDate: { type: Date, comment: "Due Date, p_date, false, false, false, true, false, false, false, , , , ," },
status: { type:  String , comment: "Status, dropdown, false, false, false, true, false, false, false, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };