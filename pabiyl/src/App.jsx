import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import DetailUser from "./components/DetailUser";
import MainPage from "./components/MainPage";
import ListUsers from "./components/ListUsers";
import { useUser } from "reactfire";
import Auth from "./components/Auth";

function App(props) {
  const user = useUser();
  return (
    <>
      <Header />
      {user && <p>Usuario:{user.email}</p>}
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/main/" component={MainPage} />
        <Route path="/detailUser/:detailUserId" component={DetailUser} />
        <Route path="/detailUser/" component={DetailUser} />
        <Route path="/listUsers/" component={ListUsers} />
      </Switch>
    </>
  );
}

export default App;
