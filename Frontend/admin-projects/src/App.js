import "./App.css";
import { Login } from "./pages/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Signup } from "./pages/Signup/Signup";
import { Projects } from "./pages/Projects/Projects";
import { Users } from "./pages/Users/Users";

function App() {
  return (
    <Router>
      {/* Barra de navagación */}
      <div>
        <Link to="/">Iniciar sesión |</Link>
        <Link to="/signup"> Registrar |</Link>
        <Link to="/projects"> Proyectos |</Link>
        <Link to="/users"> Usuarios</Link>
      </div>
      {/* Rutas */}
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
