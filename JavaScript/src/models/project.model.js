const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, required: true },
  descripcion: { type: String, required: true },
  presupuesto: { type: Number, required: true },
  objetivo_general: { type: String, required: true },
  objetivos_especificos: { type: Array, default: [] },
  fecha_inicial: { type: Date, default: Date.now },
  fecha_final: { type: Date, default: Date.now },
  lideres: { type: Array, default: [] },
  estudiantes: { type: Array, default: [] },
  reporte_avance: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  estado: { type: String, required: true },
});

const Project = mongoose.model("proyectos", projectSchema);
module.exports = Project;