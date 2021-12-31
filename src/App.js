import React from "react";
// s-a facut un update la react-router-dom. De la V6, componenta Switch este inlocuita cu Routes
// iar fiecare ruta nu mai are un component, ci un element in care se instantiaza paginile
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
