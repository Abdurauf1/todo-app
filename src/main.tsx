import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.less";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
