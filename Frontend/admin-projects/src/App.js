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
      <div id="containerLink">
        <Link to="/" id="link">
          Iniciar sesión
        </Link>
        <Link to="/signup" id="link">
          {" "}
          Registrarse
        </Link>
        <Link to="/projects" id="link">
          {" "}
          Proyectos
        </Link>
        <Link to="/users" id="link">
          {" "}
          Usuarios
        </Link>
      </div>
      <div id="backPhoto">
        <img src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
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
