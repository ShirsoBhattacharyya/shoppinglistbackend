const { Schema, model } = require("mongoose");

const ListSchema = new Schema({
  title: { type: String, required: true },
  quantity: { type: Number, min:1, required: true },
  priority: { type: String, required: true, enum:['Low','Medium','High'] },
  description: { type: String, required: true },
  bookmarked: { type: Boolean, default: false }
},{ timestamps:true });
const ListModel = model("list", ListSchema);
module.exports = ListModel;