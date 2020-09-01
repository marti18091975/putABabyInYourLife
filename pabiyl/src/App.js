import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
//import Footer from './components/Footer';
//import Header from './components/Header';
//import Main from './components/Main';
import './App.scss';
import Login from './components/Login';
import authStore from './stores/AuthStore';
import './App.scss';

function App() {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => authStore.removeChangeListener(onChange);
  }, [userLogged]);

  function onChange() {
    setUserLogged(authStore.isLogged());
  }
  return (
    <>
      {' '}

      <Switch>

        <Route path="/" component={Login} />
      </Switch>

    </>
  );
}

export default App;