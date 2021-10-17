import styles from "./ProjectForm.module.css";

import { useEffect, useState } from "react";

// GraphQL
import { useQuery, useMutation } from "@apollo/client";
import { GET_STUDENTS, GET_LEADERS } from "../../graphql/Queries";
import { ADD_PROJECT } from "../../graphql/Mutations";

// Otros elementos
import { Link } from "react-router-dom";

export function ProjectForm() {
  // ********************************************
  // QUERIES GRAPHQL
  // ********************************************

  const {
    loading: leadersLoading,
    error: leadersError,
    data: leadersData,
  } = useQuery(GET_LEADERS);

  const {
    loading: studentsLoading,
    error: studentsError,
    data: studentsData,
  } = useQuery(GET_STUDENTS);

  // ********************************************
  // CONSTANTES FORMULARIO
  // ********************************************

  const [name, setName] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [presupuesto, setPresupuesto] = useState(0);
  const [objetivoGeneral, setObjetivoGeneral] = useState("");
  const [objetivosEspecificos, setObjetivosEspecificos] = useState([]);
  const [fechaInicial, setFechaInicial] = useState(new Date());
  const [fechaFinal, setFechaFinal] = useState(new Date());
  const [lideresId, setLideresId] = useState([]);
  const [estudiantesId, setEstudiantesId] = useState([]);
  const [estado] = useState("Inicial");

  // ********************************************
  // CONSTANTES AUXILIARES
  // ********************************************

  // Objetivos específicos
  const [objetivoEspeficicoActual, setObjetivoEspeficicoActual] = useState("");

  // Líderes
  const [selectedLiderId, setSelectedLiderId] = useState("");
  const [listaLideres, setListaLideres] = useState([]);
  const [selectedLideres, setSelectedLideres] = useState([]);

  // Estudiantes
  const [selectedEstudianteId, setSelectedEstudianteId] = useState("");
  const [listaEstudiantes, setListaEstudiantes] = useState([]);
  const [selectedEstudiantes, setSelectedEstudiantes] = useState([]);

  // ********************************************
  // EFECTOS
  // ********************************************

  // Actualizar lista de líderes
  useEffect(() => {
    if (!leadersLoading) {
      setListaLideres(leadersData.leaders);
      setSelectedLiderId(leadersData.leaders[0]._id);
    }
  }, [leadersLoading, leadersData, listaLideres]);

  // Actualizar lideres seleccionados
  useEffect(() => {
    setSelectedLideres(
      listaLideres.filter((lider) => lideresId.includes(lider._id))
    );
  }, [lideresId, listaLideres]);

  // Actualizar lista de estudiantes
  useEffect(() => {
    if (!studentsLoading) {
      setListaEstudiantes(studentsData.students);
      setSelectedEstudianteId(studentsData.students[0]._id);
    }
  }, [studentsLoading, studentsData, listaLideres]);

  // Actualizar estudiantes seleccionados
  useEffect(() => {
    setSelectedEstudiantes(
      listaEstudiantes.filter((estudiante) =>
        estudiantesId.includes(estudiante._id)
      )
    );
  }, [estudiantesId, listaEstudiantes]);

  // ********************************************
  // FUNCIONES
  // ********************************************

  // Objetivos
  const agregarObjetivoEspecifico = (event) => {
    event.preventDefault();
    setObjetivosEspecificos((objetivos) => [
      ...objetivos,
      objetivoEspeficicoActual,
    ]);
    setObjetivoEspeficicoActual("");
  };

  // Líderes
  const agregarLider = (liderId) => {
    if (selectedLideres.map((lider) => lider._id).includes(liderId)) return;
    setLideresId((lideresId) => [...lideresId, liderId]);
  };

  // Estudiantes
  const agregarEstudiante = (estudianteId) => {
    if (
      selectedEstudiantes
        .map((estudiante) => estudiante._id)
        .includes(estudianteId)
    )
      return;
    setEstudiantesId((estudiantesId) => [...estudiantesId, estudianteId]);
  };

  // Registrar proyecto
  const [addProject, { loading: addLoading, error: addError }] =
    useMutation(ADD_PROJECT);

  // ********************************************
  // SUBMIT
  // ********************************************

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (objetivosEspecificos.length < 1) {
      alert("Debe ingresar por lo menos un objetivo específico");
      return;
    }

    if (lideresId.length < 1) {
      alert("Debe seleccionar por lo menos un líder de proyecto");
      return;
    }

    if (estudiantesId.length < 1) {
      alert("Debe seleccionar por lo menos un estudiante participante");
      return;
    }

    if (fechaFinal < fechaInicial) {
      alert("La fecha de inicio debe ir antes de la fecha de fin");
      return;
    }

    const proyecto = {
      name,
      descripcion,
      presupuesto: parseInt(presupuesto),
      objetivo_general: objetivoGeneral,
      objetivos_especificos: objetivosEspecificos,
      fecha_inicial: fechaInicial,
      fecha_final: fechaFinal,
      lideres: lideresId,
      estudiantes: estudiantesId,
      estado,
    };
    addProject({ variables: proyecto });
    alert("Proyecto registrado con éxito");
  };

  // ********************************************
  // CARGA Y ERRORES
  // ********************************************
  if (studentsLoading || leadersLoading) return <p>Loading ...</p>;
  if (studentsError || leadersError)
    return <p>Error: {studentsError ? studentsError : leadersError}</p>;
  if (addLoading) return "Submitting...";
  if (addError) return `Submission error! ${addError.message}`;

  return (
    <div className={styles.container}>
      <div className={styles.centerButton}>
        <Link className={styles.button} to="/projects">
          Regresar
        </Link>
      </div>
      <div className={styles.centerForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label className={styles.label}>Nombre</label>
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={styles.label}>Descripción</label>
            <input
              className={styles.input}
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={styles.label}>Presupuesto</label>
            <input
              className={styles.input}
              type="number"
              min="0"
              value={presupuesto}
              onChange={(e) => setPresupuesto(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={styles.label}>Objetivo general</label>
            <input
              className={styles.input}
              type="text"
              value={objetivoGeneral}
              onChange={(e) => setObjetivoGeneral(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={styles.label}>Objetivos específicos</label>
            <ul>
              {objetivosEspecificos.map((objetivo, index) => (
                <li key={objetivo + index.toString()}>{objetivo}</li>
              ))}
            </ul>
            <input
              className={styles.input}
              type="text"
              value={objetivoEspeficicoActual}
              onChange={(e) => setObjetivoEspeficicoActual(e.target.value)}
            />
            <div className={styles.buttonContainer}>
              <button
                className={styles.objetivoButton}
                onClick={agregarObjetivoEspecifico}
              >
                Agregar objetivo
              </button>
            </div>
          </div>
          <div>
            <label className={styles.label}>Fecha inicial</label>
            <input
              className={styles.input}
              type="date"
              value={fechaInicial}
              onChange={(e) => setFechaInicial(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={styles.label}>Fecha final</label>
            <input
              className={styles.input}
              type="date"
              value={fechaFinal}
              onChange={(e) => setFechaFinal(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={styles.label}>Líderes</label>
            <ul>
              {selectedLideres.map((lider) => (
                <li key={lider._id}>{lider.nombre}</li>
              ))}
            </ul>
            <select
              className={styles.input}
              value={selectedLiderId}
              onChange={(e) => setSelectedLiderId(e.target.value)}
            >
              {listaLideres.map((lider) => (
                <option key={lider._id} value={lider._id}>
                  {lider.nombre}
                </option>
              ))}
            </select>
            <div className={styles.buttonContainer}>
              <button
                className={styles.objetivoButton}
                onClick={(e) => {
                  e.preventDefault();
                  agregarLider(selectedLiderId);
                }}
              >
                Agregar líder
              </button>
            </div>
          </div>
          {/* Estudiantes */}
          <div>
            <label className={styles.label}>Estudiantes</label>
            <ul>
              {selectedEstudiantes.map((estudiante) => (
                <li key={estudiante._id}>{estudiante.nombre}</li>
              ))}
            </ul>
            <select
              className={styles.input}
              value={selectedEstudianteId}
              onChange={(e) => setSelectedEstudianteId(e.target.value)}
            >
              {listaEstudiantes.map((estudiante) => (
                <option key={estudiante._id} value={estudiante._id}>
                  {estudiante.nombre}
                </option>
              ))}
            </select>
            <div className={styles.buttonContainer}>
              <button
                className={styles.objetivoButton}
                onClick={(e) => {
                  e.preventDefault();
                  agregarEstudiante(selectedEstudianteId);
                }}
              >
                Agregar estudiante
              </button>
            </div>
          </div>
          {/* Reportes avance */}
          <div className={styles.centerButton}>
            <button className={styles.button}>Registrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
