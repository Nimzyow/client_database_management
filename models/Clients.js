const mongoose = require("mongoose");

const ClientsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  phone2: {
    type: String
  },
  type: {
    type: String,
    default: "Job not accepted"
  },

  numberAndStreet: {
    type: String
  },
  secondLineAdd: {
    type: String
  },
  thirdLineAdd: {
    type: String
  },
  postCode: {
    type: String
  },

  proDes: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("client", ClientsSchema);
