import React, { useState } from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebaseApp();
  const user = useUser();
  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };
  const logout = async () => {
    await firebase.auth().signOut();
  };
  const login = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    await firebase.auth().signInWithPopup(provider);
  };

  const signInAnonnymusly = async () => {
    await firebase.auth().signInAnonymously();
  };
  return (
    <div>
      {!user && (
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            onChange={(ev) => setEmail(ev.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(ev) => setPassword(ev.target.value)}
          ></input>
          <button onClick={submit}>register</button>
          <button onClick={login}>Start session</button>
          <button onClick={signInWithGoogle}>Google</button>
          <button onClick={signInAnonnymusly}>Anon</button>
        </div>
      )}
      {user && <button onClick={logout}>Log out</button>}
    </div>
  );
};
