import React, { useEffect, useState } from "react";
import "../App.css";
import Login from "./Login/index";
import TodoList from "./Todo/TodoList";
import Home from "./Home/Index";
import Users from "./Users/Index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { isAuth, closeSesion } from "../utils/globalVariables";
import { BsHouseDoor } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";

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
    }, 240000);
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
            <nav className="side-nav">
              <img
                src="https://endeavor.org.co/wp-content/uploads/2019/09/Banner-Mi-%C3%81guila-para-PW-01.jpg"
                alt="logo mi aguila"
              />
              <Link to="/inicio">
                <BsHouseDoor style={{ paddingRight: "30px" }} /> Inicio
              </Link>

              <Link to="/users">
                <IoIosPeople style={{ paddingRight: "19px" }} />
                Usuarios
              </Link>

              <Link to="/tasks">
                <BiTask style={{ paddingRight: "30px" }} />
                Tareas
              </Link>
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
            <Route path="/users" component={Users} />
            <Route path="/inicio" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
