import styles from "./UserCard.module.css";
import { useEffect, useState } from "react";
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

  const [showTeachers, setShowTeachers] = useState(false);
  const [users, setUsers] = useState([]);

  const { loading, error, data } = useQuery(GET_USERS);

  useEffect(() => {
    if (!loading) {
      handleClick(data.users[0]._id);
    }
  }, [loading, data, handleClick]);

  const getIdUser = (id) => {
    handleClick(id);
  };

  const showAll = () => {
    setShowTeachers(!showTeachers);
  }

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>Error: {error}</p>;

  const filteredUsers = data.users.filter((user) => {
    if (!showTeachers) return true;
    else if (showTeachers && user.rol === 'Director') return true;
    else return false;
  });

  return (
    <>
      <div>
        <Button label="Todos" onSelect={() => showAll()}/>
        <Button label="Maestros" onSelect={() => showAll()}/>
      </div>
      {filteredUsers.map((user) => (
        <div key={user._id} className={styles.card}>
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
      ))}
    </>
  );

}
