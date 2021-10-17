import styles from "./UserCard.module.css";
import { useEffect } from "react";
import { Button } from "../../components/Button/Button";

import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query getusers {
    users {
      _id
      nombre
      rol
    }
  }
`;

export default function UserCard({ handleClick }) {
  const { loading, error, data } = useQuery(GET_USERS);

  useEffect(() => {
    if (!loading) {
      handleClick(data.users[0]._id);
    }
  }, [loading, data, handleClick]);

  const getIdUser = (id) => {
    handleClick(id);
  };

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>Error: {error}</p>;

  return data.users.map((user) => (
    <div className={styles.card}>
      <div>
        <strong>Nombre: </strong>
        <span>{user.nombre}</span>
      </div>
      <div>
        <strong>Rol: </strong>
        <span>{user.rol}</span>
      </div>
      <Button label="Ver" onSelect={() => getIdUser(user._id)} />
    </div>
  ));
  // return "HOLA"
}
