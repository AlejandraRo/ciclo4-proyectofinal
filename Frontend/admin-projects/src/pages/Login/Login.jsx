import styles from './Login.module.css';
import { Button } from "../../components/Button/Button";

export function Login() {

  const redirectProjects = () => {
    window.location = '/projects';
  }

  return (
    <div className={styles.container}>
      <h1>Iniciar sesión</h1>
      <Button label="Iniciar Sesión" onSelect={() => redirectProjects()}/>
    </div>
  );
}
