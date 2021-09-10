const mongoose = require("mongoose");
const vercelModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("vercelapp", vercelModel);
