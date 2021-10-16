const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  usuarios_id: { type: Array, default: [] },
  reporte: { type: String, required: true },
  estado: { type: String, required: true },
  fase: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = reportSchema;
