import React from "react";
import Giveaway from "../layouts/GiveAway";
import Header from "../layouts/Header";
import HowTo from "../layouts/HowTo";
import Navbar from "../layouts/Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <HowTo />
      <Giveaway />
    </>
  );
}

export default Homepage;
