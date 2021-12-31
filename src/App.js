import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Mininavbar from "./components/Mininavbar/Mininavbar";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Mininavbar />
      <Banner />
      <Categories />
    </div>
  );
}

export default App;
