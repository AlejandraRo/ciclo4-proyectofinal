import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query getprojects {
    projects {
      _id
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

export const GET_USERS = gql`
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

export const GET_STUDENTS = gql`
  query getstudents {
    students {
      _id
      rol
      nombre
      carrera
      celular
      fecha_ingreso
    }
  }
`;

export const GET_LEADERS = gql`
  query getleaders {
    leaders {
      _id
      rol
      nombre
      carrera
      celular
      fecha_ingreso
    }
  }
`;

export const GET_PROJECT_BY_ID = gql`
  query project {
    project {
      _id
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
