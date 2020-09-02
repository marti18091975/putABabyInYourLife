import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import Footer from './components/Footer';
//import Header from './components/Header';
//import Main from './components/Main';
import './App.css';
import DetailUser from './components/DetailUser';
//import Login from './components/Login';
//import authStore from './stores/AuthStore';


function App(props) {
  /*const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => authStore.removeChangeListener(onChange);
  }, [userLogged]);

  function onChange() {
    setUserLogged(authStore.isLogged());
  }*/
  return (
    <>
      {' '}

      <Switch>

        <Route path="/:detailUserId" component={DetailUser} />
        <Route path="/" component={DetailUser} />
      </Switch>

    </>
  );
}

export default App;