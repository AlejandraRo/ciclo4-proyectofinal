import styles from './UserList.module.css';

import { Button } from "../../components/Button/Button";

import { gql, useQuery, useMutation } from '@apollo/client';

const GET_USER = gql`
  query getusers($_id: String) {
    user(_id: $_id) {
      rol
      nombre
      carrera
      celular
      fecha_ingreso
    }
  }
`;

const DELETE_USER = gql`
  mutation updateUser($_id: String){ 
    deleteUser(_id: $_id){
      _id
    }
  }
`;

export default function UserList({userId, onEdit}) {

  const { loading, error, data } = useQuery(GET_USER, {
       variables: { _id: userId },
   })

  const [deleteUser] = useMutation(DELETE_USER);

  if(loading) return <p>Loading ...</p>
  if(error) return <p>Error: {error}</p>

  const editUser = () => {
    onEdit(true)
  }

  const deleteUserById = () => {
    deleteUser({ variables: {  _id: userId}})
  }
  
  return (
      <div className={styles.containerList}>
        <div className={styles.containerDiv}>
          <strong>Rol: </strong>
          <span>{data.user.rol}</span>
        </div>
        <div className={styles.containerDiv}>
          <strong>Nombre: </strong>
          <span>{data.user.nombre}</span>
        </div>
        <div className={styles.containerDiv}>
          <strong>Carrera: </strong>
          <span>{data.user.carrera}</span>
        </div>
        <div className={styles.containerDiv}>
          <strong>Celular: </strong>
          <span>{data.user.celular}</span>
        </div>
        <div className={styles.containerDiv}>
          <strong>Fecha de ingreso: </strong>
          <span>{data.user.fecha_ingreso}</span>
        </div>
        <Button label="Editar" onSelect={() => editUser()}/>
        <Button label="Eliminar" onSelect={() => deleteUserById()}/>
      </div>
   
  )
}