import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Mininavbar from "../../components/Mininavbar/Mininavbar";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Recomands from "../../components/Recomands/Recomands";
import SpecialOferts from "../../components/SpecialOferts/SpecialOferts";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Mininavbar />
      <Banner />
      <Categories />
      <Recomands />
      <SpecialOferts />
    </div>
  );
}

export default Home;
