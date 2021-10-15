//import styles from './ProjectList.module.scss';

// Elementos de React
import { useEffect, useState } from "react";
// Servicios
import { projectService } from "../../services/ProjectService";
import { userService } from "../../services/UserService";
// Otros elementos
import { Link } from "react-router-dom";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

export function ProjectList() {
  // ********************************************
  // CONSTANTES
  // ********************************************

  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  // ********************************************
  // EFECTOS
  // ********************************************

  // Consultar proyectos
  useEffect(() => {
    const fetchData = async () => {
      const response = await projectService.findAll();
      setProjects(response);
    };
    fetchData();
  }, []);

  // Consultar usuarios
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await userService.findAll();
      setUsers(response);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Link to="/projects/new">Nuevo proyecto</Link>
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          nombre={project.name}
          estado={project.estado}
          descripcion={project.descripcion}
          presupuesto={project.presupuesto}
          objetivoGeneral={project.objetivo_general}
          objetivosEspecificos={project.objetivos_especificos}
          lideres={users
            .filter((user) => project.lideres.includes(user._id))
            .map((user) => user.nombre)}
          estudiantes={users
            .filter((user) => project.estudiantes.includes(user._id))
            .map((user) => user.nombre)}
          fechaInicial={project.fecha_inicial}
          fechaFinal={project.fecha_final}
        />
      ))}
    </div>
  );
}
