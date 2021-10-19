import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $rol: String!
    $nombre: String!
    $carrera: String!
    $celular: String!
    $fecha_ingreso: Date
    $createdAt: Date
    $updatedAt: Date
    $username: String!
    $password: String!
  ) {
    addUser(
      rol: $rol
      nombre: $nombre
      carrera: $carrera
      celular: $celular
      fecha_ingreso: $fecha_ingreso
      createdAt: $createdAt
      updatedAt: $updatedAt
      username: $username
      password: $password
    ) {
      _id
      rol
      nombre
      carrera
      celular
      fecha_ingreso
      createdAt
      updatedAt
      username
      password
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $_id: String
    $rol: String
    $nombre: String
    $carrera: String
    $celular: String
    $fecha_ingreso: Date
  ) {
    updateUser(
      _id: $_id
      rol: $rol
      nombre: $nombre
      carrera: $carrera
      celular: $celular
      fecha_ingreso: $fecha_ingreso
    ) {
      _id
      rol
      nombre
      carrera
      celular
      fecha_ingreso
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $descripcion: String!
    $presupuesto: Int!
    $objetivo_general: String!
    $objetivos_especificos: [String]!
    $fecha_inicial: Date
    $fecha_final: Date
    $estado: String!
    $lideres: [String]!
    $estudiantes: [String]!
  ) {
    addProject(
      name: $name
      descripcion: $descripcion
      presupuesto: $presupuesto
      objetivo_general: $objetivo_general
      objetivos_especificos: $objetivos_especificos
      fecha_inicial: $fecha_inicial
      fecha_final: $fecha_final
      estado: $estado
      lideres: $lideres
      estudiantes: $estudiantes
    ) {
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

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $_id: String
    $name: String
    $descripcion: String
    $presupuesto: Int
    $objetivo_general: String
    $objetivos_especificos: [String]
    $fecha_inicial: Date
    $fecha_final: Date
    $estado: String
    $lideres: [String]
    $estudiantes: [String]
  ) {
    updateProject(
      _id: $_id
      name: $name
      descripcion: $descripcion
      presupuesto: $presupuesto
      objetivo_general: $objetivo_general
      objetivos_especificos: $objetivos_especificos
      fecha_inicial: $fecha_inicial
      fecha_final: $fecha_final
      estado: $estado
      lideres: $lideres
      estudiantes: $estudiantes
    ) {
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

export const DELETE_PROJECT = gql`
  mutation deleteProject($_id: String) {
    deleteProject(_id: $_id) {
      _id
    }
  }
`;
