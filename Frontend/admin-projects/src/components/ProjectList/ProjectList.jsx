import styles from "./ProjectList.module.css";

// GraphQL
import { useQuery } from "@apollo/client";
import { GET_PROJECTS, GET_USERS } from "../../graphql/Queries";

// Otros elementos
import { Link } from "react-router-dom";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

export function ProjectList() {
  // ********************************************
  // QUERIES GRAPHQL
  // ********************************************
  const {
    loading: projectsLoading,
    error: projectsError,
    data: projectsData,
  } = useQuery(GET_PROJECTS);

  const {
    loading: usersLoading,
    error: usersError,
    data: usersData,
  } = useQuery(GET_USERS);

  const projects = projectsData?.projects;
  const users = usersData?.users;

  // ********************************************
  // CARGA Y ERRORES
  // ********************************************
  if (projectsLoading || usersLoading) return <p>Loading ...</p>;
  if (projectsError || usersError)
    return <p>Error: {projectsError ? projectsError : usersError}</p>;

  return (
    <div>
      <div className={styles.centerButton}>
        <Link className={styles.button} to="/projects/new">
          Nuevo proyecto
        </Link>
      </div>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            _id={project._id}
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
    </div>
  );
}
