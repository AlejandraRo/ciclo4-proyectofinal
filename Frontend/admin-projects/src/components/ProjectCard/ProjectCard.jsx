import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export function ProjectCard({
  _id,
  nombre,
  estado,
  descripcion,
  presupuesto,
  objetivoGeneral,
  objetivosEspecificos,
  lideres,
  estudiantes,
  fechaInicial,
  fechaFinal,
}) {
  return (
    <div className={styles.card}>
      <div>
        <strong>Nombre: </strong>
        <span>{nombre}</span>
      </div>
      <div>
        <strong>Estado: </strong>
        <span>{estado}</span>
      </div>
      <div>
        <strong>Descripción: </strong>
        <span>{descripcion}</span>
      </div>
      <div>
        <strong>Presupuesto: </strong>
        <span>{presupuesto}</span>
      </div>
      <div>
        <strong>Objetivo general: </strong>
        <span>{objetivoGeneral}</span>
      </div>
      <div>
        <strong>Objetivos específicos: </strong>
        <ul>
          {objetivosEspecificos.map((objetivo) => (
            <li key={objetivo}>{objetivo}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Líderes: </strong>
        <ul>
          {lideres.map((lider) => (
            <li key={lider}>{lider}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Estudiantes: </strong>
        <ul>
          {estudiantes.map((estudiante) => (
            <li key={estudiante}>{estudiante}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Fecha inicial: </strong>
        <span>{fechaInicial.split("T")[0]}</span>
      </div>
      <div>
        <strong>Fecha Final: </strong>
        <span>{fechaFinal.split("T")[0]}</span>
      </div>
      <Link to={"/projects/edit/" + _id}>Editar</Link>
    </div>
  );
}
