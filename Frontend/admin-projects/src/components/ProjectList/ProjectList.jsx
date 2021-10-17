import styles from './ProjectList.module.css';

// Elementos de React
import { useEffect, useState } from "react";
// Servicios
// import { projectService } from "../../services/ProjectService";
// import { userService } from "../../services/UserService";
// Otros elementos
import { Link } from "react-router-dom";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

import { gql, useQuery } from '@apollo/client';

const GET_PROJECTS = gql`
  query getprojects {
    projects {
      name
      descripcion
      presupuesto
      objetivo_general
      objetivos_especificos
      fecha_inicial
      fecha_final
      estado
      lideres
      estudiantes
    }
  }
`;

const GET_USERS = gql`
  query getusers {
    users {
      _id
      rol
      nombre
      carrera
      celular
      fecha_ingreso
    }
  }
`;


export function ProjectList() {
  // ********************************************
  // CONSTANTES
  // ********************************************

  const { loading, error, data } = useQuery(GET_PROJECTS);
  const userQuery = useQuery(GET_USERS);

  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  // ********************************************
  // EFECTOS
  // ********************************************

  // Consultar proyectos
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await projectService.findAll();
  //     setProjects(response);
  //   };
  //   fetchData();
  // }, []);

  // Consultar usuarios
  useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await userService.findAll();
  //     setUsers(response);
  //   };
  //   fetchUsers();
    if(!loading || !userQuery.loading) {
      setUsers(userQuery.data.users);
    }
      
        
  }, [userQuery.loading]);
  
  if(loading || userQuery.loading) return <p>Loading ...</p>
  if(error || userQuery.error) return <p>Error: {error}</p>
  
  return (
    <div>
      <Link to="/projects/new" className={styles.btnNewProject}>Nuevo proyecto</Link>
      
      <div className={styles.list}>
        {data.projects.map((project) => (
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
    </div>
  );
}
