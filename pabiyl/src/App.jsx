import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import DetailUser from "./components/DetailUser";
import MainPage from "./components/MainPage";

function App(props) {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/detailUser/:detailUserId" component={DetailUser} />
        <Route path="/detailUser/" component={DetailUser} />
      </Switch>
    </>
  );
}

export default App;
