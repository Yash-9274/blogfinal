import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthContextProvider from "./Context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GoogleOAuthProvider clientId="1081086113702-c6nr2s3ubdmglgb2ojsv8u06ji9e7lsu.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
