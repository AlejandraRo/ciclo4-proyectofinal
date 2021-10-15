//import styles from './ProjectForm.module.css';

import { useEffect, useState } from "react";

import { projectService } from "../../services/ProjectService";
import { userService } from "../../services/UserService";

import { Link } from "react-router-dom";

export function ProjectForm() {
  const [name, setName] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [presupuesto, setPresupuesto] = useState(0);
  const [objetivoGeneral, setObjetivoGeneral] = useState("");
  const [objetivosEspecificos, setObjetivosEspecificos] = useState([]);
  const [fechaInicial, setFechaInicial] = useState(new Date());
  const [fechaFinal, setFechaFinal] = useState(new Date());
  const [lideres, setLideres] = useState([]);
  const [estudiantes, setEstudiantes] = useState([]);
  const [reporteAvance, setReporteAvance] = useState([]);
  const [createdAt] = useState(new Date());
  const [updatedAt] = useState(new Date());
  const [estado, setEstado] = useState("Inicio");

  const [objetivoEspeficicoActual, setObjetivoEspeficicoActual] = useState("");
  const [selectedLider, setSelectedLider] = useState("");
  const [listaLideres, setListaLideres] = useState([]);

  useEffect(() => {
    const fetchLideres = async () => {
      const response = await userService.findAll();
      setListaLideres(response);
      setSelectedLider(response[0]._id);
    };
    fetchLideres();
  }, []);

  const agregarObjetivoEspecifico = (event) => {
    event.preventDefault();
    setObjetivosEspecificos((objetivos) => [
      ...objetivos,
      objetivoEspeficicoActual,
    ]);
    setObjetivoEspeficicoActual("");
  };

  const agregarLider = (liderId) => {
    setLideres((lideres) => [...lideres, liderId]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const proyecto = {
      name,
      descripcion,
      presupuesto,
      objetivo_general: objetivoGeneral,
      objetivos_especificos: objetivosEspecificos,
      fecha_inicial: fechaInicial,
      fecha_final: fechaFinal,
      lideres,
      estudiantes,
      reporte_avance: reporteAvance,
      createdAt,
      updatedAt,
      estado,
    };
    console.log(proyecto);
    const response = await projectService.new(proyecto);
    console.log(response);
  };

  return (
    <div>
      <Link to="/projects">Regresar</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Presupuesto</label>
          <input
            type="number"
            min="0"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Objetivo general</label>
          <input
            type="text"
            value={objetivoGeneral}
            onChange={(e) => setObjetivoGeneral(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Objetivos específicos</label>
          <ul>
            {objetivosEspecificos.map((objetivo, index) => (
              <li key={objetivo + index.toString()}>{objetivo}</li>
            ))}
          </ul>
          <input
            type="text"
            value={objetivoEspeficicoActual}
            onChange={(e) => setObjetivoEspeficicoActual(e.target.value)}
          />
          <button onClick={agregarObjetivoEspecifico}>Agregar objetivo</button>
        </div>
        <div>
          <label>Fecha inicial</label>
          <input
            type="date"
            value={fechaInicial}
            onChange={(e) => setFechaInicial(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha final</label>
          <input
            type="date"
            value={fechaFinal}
            onChange={(e) => setFechaFinal(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Líderes</label>
          <ul>
            {lideres.map((liderId, index) => (
              <li key={liderId + index.toString()}>{liderId}</li>
            ))}
          </ul>
          <select
            value={selectedLider}
            onChange={(e) => setSelectedLider(e.target.value)}
          >
            {listaLideres.map((lider) => (
              <option key={lider._id} value={lider._id}>
                {lider.nombre}
              </option>
            ))}
          </select>
          <button
            onClick={(e) => {
              e.preventDefault();
              agregarLider(selectedLider);
            }}
          >
            Agregar líder
          </button>
        </div>
        {/* Estudiantes */}
        {/* Reportes avance */}
        <button>Registrar</button>
      </form>
    </div>
  );
}
