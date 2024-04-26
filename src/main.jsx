import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import './bootstrap.min.css'
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ContextAPI from "./contexts/ContextAPI.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="702944453527-28suri4o2n6bv6m5emgpecl63kmb5rvp.apps.googleusercontent.com">
      <ContextAPI>
      <App />
      </ContextAPI>
    </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
