import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import fireBaseConfig from "./firebase/firebase-config";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FirebaseAppProvider firebaseConfig={fireBaseConfig}>
        <Suspense fallback={"Connecting to the app..."}>
          <App />
        </Suspense>
      </FirebaseAppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
