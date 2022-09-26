import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import MyRoutes from "./Router/config";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MyRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
