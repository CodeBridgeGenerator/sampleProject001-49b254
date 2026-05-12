const customerDetails = require("./customerDetails/customerDetails.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(customerDetails);
    // ~cb-add-configure-service-name~
};
