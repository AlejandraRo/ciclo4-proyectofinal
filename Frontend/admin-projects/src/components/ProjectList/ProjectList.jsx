//import styles from './ProjectList.module.scss';

import { useEffect, useState } from "react";
import { projectService } from "../../services/ProjectService";
import { Link } from "react-router-dom";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

export function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await projectService.findAll();
      setProjects(response);
    };
    fetchData();
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
          lideres={project.lideres}
          estudiantes={project.estudiantes}
          fechaInicial={project.fecha_inicial}
          fechaFinal={project.fecha_final}
        />
      ))}
    </div>
  );
}
