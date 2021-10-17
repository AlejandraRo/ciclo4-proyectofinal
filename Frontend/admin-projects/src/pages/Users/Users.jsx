import styles from "./Users.module.css";

import UserCard from "../../components/UserCard/UserCard";
import UserList from "../../components/UserList/UserList";
import Userform from "../../components/UserForm/UserForm";

import { useState } from "react";

export function Users() {
  const [editable, setEditable] = useState(false);
  const [id, setId] = useState("");

  const listOfUsers = id && <UserList userId={id} onEdit={setEditable} />;
  const userForUpdate = <Userform idForUpdate={id} onEdit={setEditable} />;

  return (
    <div>
      <div className={styles.containerCard}>
        <div>
          <UserCard handleClick={setId} />
        </div>
        <div className={styles.containerForm}>
          {editable ? userForUpdate : listOfUsers}
        </div>
      </div>
    </div>
  );
}
