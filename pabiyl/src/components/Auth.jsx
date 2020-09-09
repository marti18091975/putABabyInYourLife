import React, { useState, useEffect } from "react";

import {
  login,
  logout,
  googleLogin,
  anonymousLogin,
  createUser,
} from "../actions/AuthActions";
import "./auth.css";
import authStore from "../stores/authStore";
import Main from "./MainPage";
export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(authStore.isLogged());

  const [user, setUser] = useState(authStore.getUserProfile());
  useEffect(() => {
    authStore.addChangeListener(onAuthChange);
    return () => authStore.removeChangeListener(onAuthChange);
  }, [isLogged, user]);

  function onAuthChange() {
    setIsLogged(authStore.isLogged());
    setUser(authStore.getUserProfile());
  }
  return (
    <div className="main__login">
      {!user && (
        <div className="login-container">
          <img
            className="logo__login"
            src="https://cdn.icon-icons.com/icons2/1873/PNG/512/baby-6_119902.png"
          ></img>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            className="email__box"
            onChange={(ev) => setEmail(ev.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="email__box"
            onChange={(ev) => setPassword(ev.target.value)}
          ></input>
          <div className="section__bottom">
            <div className="section">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  login(email, password);
                }}
                className="button__login login"
              ></button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  createUser(email, password);
                }}
                className="button__login register"
              ></button>
            </div>
            <div className="section">
              <button
                onClick={googleLogin}
                className="button__login google"
              ></button>
              <button
                onClick={anonymousLogin}
                className="button__login anon"
              ></button>
            </div>
          </div>
        </div>
      )}
      {user && <Main />}
    </div>
  );
};
