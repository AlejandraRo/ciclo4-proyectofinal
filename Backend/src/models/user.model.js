const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  rol: { type: String, required: true },
  nombre: { type: String, required: true },
  carrera: { type: String, required: true },
  celular: { type: Number, required: true },
  fecha_ingreso: { type: Date, default: Date.now },
  username: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("usuarios", userSchema);
module.exports = User;
