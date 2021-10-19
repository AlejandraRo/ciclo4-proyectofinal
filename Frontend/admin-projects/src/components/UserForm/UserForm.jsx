import styles from './UserForm.module.css';

import { Button } from "../../components/Button/Button";

import { gql, useMutation, useQuery } from '@apollo/client';

import { useState, useEffect } from 'react';

const UPDATE_USER = gql`
  mutation updateUser(
    $_id: String,
    $rol: String,
    $nombre: String,
    $carrera: String,
    $celular: String,
    $fecha_ingreso: Date
  ) {
    updateUser(
      _id: $_id,
      rol: $rol,
      nombre: $nombre,
      carrera: $carrera,
      celular: $celular,
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

const GET_USER_BY_ID = gql`
  query getUserById($_id: String) {
    user(_id: $_id) {
      _id
      rol
      nombre
      carrera
      celular
      fecha_ingreso
    }
  }
`;

export default function UserForm({idForUpdate, onEdit}) {

  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [carrera, setCarrera] = useState("");
  const [celular, setCelular] = useState("");
  const [fecha_ingreso, setFecha_ingreso] = useState("");

  const [updateUser, { loading, error }] = useMutation(UPDATE_USER);
  const { data } = useQuery(GET_USER_BY_ID, { variables: { _id: idForUpdate } })

  useEffect(() => {
    if (data) {
      setNombre(data.user.nombre);
      setRol(data.user.rol);
      setCarrera(data.user.carrera);
      setCelular(data.user.celular);
      setFecha_ingreso(data.user.fecha_ingreso)
    }
  }, [data]);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const editUser = () => {
    onEdit(false);
  }
  const redirectUser = () => {
    window.location = '/users';
  }

  return (    
      <form
      onSubmit={e => {
        updateUser({ variables: {  _id: idForUpdate, rol: rol, nombre: nombre, carrera: carrera, celular: celular, fecha_ingreso: fecha_ingreso } });
        }}
        className={styles.containerForm}
      >
        <div>
          <strong>Rol: </strong>
          <br/>
          <input
            type="text"
            value={rol}
            onChange={e => setRol(e.target.value)}
          ></input>
        </div>
        <div>
          <strong>Nombre: </strong>
          <br/>
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          ></input>
        </div>
        <div>
          <strong>Carrera: </strong>
          <br/>
          <input
            type="text"
            value={carrera}
            onChange={e => setCarrera(e.target.value)}
          ></input>
        </div>
        <div>
          <strong>Celular: </strong>
          <br/>
          <input
            type="text"
            value={celular}
            onChange={e => setCelular(e.target.value)}
          ></input>
        </div>
        <div>
          <strong>Fecha de ingreso: </strong>
          <br/>
          <input
            type="date"
            value={fecha_ingreso}
            onChange={e => setFecha_ingreso(e.target.value)}
          ></input>
        </div>
        <Button label="Guardar" onSelect={() => redirectUser()}/>
        <Button label="Cancelar" onSelect={() => editUser()}/>
      </form>
   
  )
}