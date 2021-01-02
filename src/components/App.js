import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    if (isAuth()) {
      setIsloggedIn(isAuth());
    }
  }, []);
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const redirectUser = () => {
    return <Redirect from="/inicio" to="/login" />;
  };
  let time;
  const timeOut = () => {
    time = setTimeout(() => {
      confirmation();
    }, 40000);
  };
  const confirmation = () => {
    const choose = window.confirm("¿deseas continuar en la pagina?");
    if (choose) {
      return choose;
    } else {
      clearTimeout(time);
      closeSesion();
      setIsloggedIn(false);
    }
  };
  if (isLoggedIn) {
    timeOut();
  }
  return (
    <div className="App">
      <Router>
        <div>
          {isLoggedIn ? (
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
          ) : (
            redirectUser()
          )}

          <Switch>
            <Route
              path="/login"
              component={() => (
                <Login change={(isLoggedIn) => setIsloggedIn(isLoggedIn)} />
              )}
            />
            <Route path="/tasks" component={TodoList} />
            {/*    <Route path="/users" component={Users} />
            <Route path="/inicio" component={Home} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
