import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/BookForm.css";
import "./styles/BookCard.css";
import "./styles/Dashboard.css";
import "./styles/ControlPanel.css";
import "./styles/Responsive.css";
import "./styles/DeleteModal.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="colored"
    />
  </StrictMode>
);