import styles from '../UserForm/UserForm.module.css';
import { Button } from "../../components/Button/Button";

import { useMutation } from '@apollo/client';

import { useState } from 'react';
import { ADD_USER } from '../../graphql/Mutations';

export default function UserRegister(){
    const [nombre, setNombre] = useState("");
    const [rol, setRol] = useState("");
    const [carrera, setCarrera] = useState("");
    const [celular, setCelular] = useState("");
    const [fecha_ingreso, setFecha_ingreso] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [updatedAt, setUpdatedAt] = useState("");
    const [usuario, setusuario] = useState("");
    const [password, setPassword] = useState("");

    const [addUser, { loading, error }] = useMutation(ADD_USER);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    const redirectToUsers = () =>{
      window.location = '/users';
    };

    return (
      <div>
        <h1>Registrar usuario</h1>
        <form
        onSubmit={e => {
          addUser({ variables: { rol: rol, nombre: nombre, carrera: carrera, celular: celular, fecha_ingreso: fecha_ingreso, createdAt: createdAt, updatedAt: updatedAt, username: usuario, password: password } });
            alert("Usuario registrado con éxito");
          }}
          className={styles.containerForm}
          
        >
          <div>
            <input
              type="text"
              value={rol}
              placeholder="Rol:"
              onChange={e => setRol(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={nombre}
              placeholder="Nombre:"
              onChange={e => setNombre(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={carrera}
              placeholder="Carrera:"
              onChange={e => setCarrera(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={celular}
              placeholder="Celular:"
              onChange={e => setCelular(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <input
              type="date"
              value={fecha_ingreso}
              placeholder="Creado en:"
              onChange={e => (setFecha_ingreso(e.target.value), setCreatedAt(e.target.value), setUpdatedAt(e.target.value)) }
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={usuario}
              placeholder="Username:"
              onChange={e => setusuario(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="Password:"
              onChange={e => setPassword(e.target.value)}
              required
            ></input>
          </div>
          
          <Button label="Guardar" onSelect={() => redirectToUsers()}/>
          
        </form>

      </div>
       
    )
}