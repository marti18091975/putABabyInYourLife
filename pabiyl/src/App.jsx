import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import DetailUser from "./components/DetailUser";
import MainPage from "./components/MainPage";
import ListUsers from "./components/ListUsers";
import { useUser } from "reactfire";
import Auth from "./components/Auth";
import authStore from "./stores/authStore";
import SearchFilters from "./components/SearchFilters";
import Profile from "./components/Profile";
import ProfileEditor from "./components/ProfileEditor";
import Footer from "./components/Footer";

function App(props) {
  const [userLogued, setUserLogued] = useState(false);
  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => authStore.removeChangeListener(onChange);
  }, [userLogued]);

  function onChange() {
    setUserLogued(authStore.isLogged());
  }
  const user = useUser();
  return (
    <>
      {userLogued && <Header />}
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/profile" component={Profile} />
        <Route path="/profileEditor" component={ProfileEditor} />
        <Route path="/main/" component={MainPage} />
        <Route path="/detailUser/:detailUserId" component={DetailUser} />
        <Route path="/detailUser/" component={DetailUser} />
        <Route path="/listUsers/" component={ListUsers} />
        <Route path="/searchFilters/" component={SearchFilters} />
      </Switch>
      {userLogued && <Footer />}
    </>
  );
}

export default App;
