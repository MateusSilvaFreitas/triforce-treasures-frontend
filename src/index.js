import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{backgroundColor: "#161616", height: "100vh", color: "#FFF", fontFamily: "Roboto"}}>
      <Header />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
