import React, { useEffect } from "react";
import "../App.css";
import Login from "./Login/index";
import TodoList from "./Todo/TodoList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { isAuth, closeSesion } from "../utils/globalVariables";

function App() {
  const redirectUser = () => {
    return <Redirect from="/inicio" to="/login" />;
  };
  let time;
  const timeOut = () => {
    time = setTimeout(() => {
      confirmation();
    }, 4000);
  };
  const confirmation = () => {
    const choose = window.confirm("¿deseas continuar en la pagina?");
    if (choose) {
      return choose;
    } else {
      clearTimeout(time);
      closeSesion();
    }
  };
  if (isAuth()) {
    timeOut();
  }
  return (
    <div className="App">
      <Router>
        <div>
          {redirectUser()}
          {isAuth() ? (
            <nav>
              <ul>
                <li>
                  <Link to="/inicio">Inicio</Link>
                </li>
                <li>
                  <Link to="/users">Usuarios</Link>
                </li>
                <li>
                  <Link to="/tasks">Tareas</Link>
                </li>
              </ul>
            </nav>
          ) : null}

          <Switch>
            <Route path="/login" component={Auth} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/users" component={Users} />
            <Route path="/inicio" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
function Auth() {
  return (
    <div>
      <h2>login</h2>
      <Login />
    </div>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function Tasks() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
