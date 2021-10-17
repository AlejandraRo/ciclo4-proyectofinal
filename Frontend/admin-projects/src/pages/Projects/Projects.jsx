import styles from "./Projects.module.css";

import { Switch, Route } from "react-router-dom";
import { ProjectList } from "../../components/ProjectList/ProjectList";
import { ProjectForm } from "../../components/ProjectForm/ProjectForm";
import { ProjectEdit } from "../../components/ProjectEdit/ProjectEdit";

export function Projects() {
  return (
    <div>
      <h1 className={styles.title}>Proyectos</h1>
      <Switch>
        <Route path="/projects/new">
          <ProjectForm />
        </Route>
        <Route path="/projects/edit/:projectId">
          <ProjectEdit />
        </Route>
        <Route path="/projects">
          <ProjectList />
        </Route>
      </Switch>
    </div>
  );
}
