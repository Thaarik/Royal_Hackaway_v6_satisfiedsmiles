import React from "react";
import Footer from "../layouts/Footer";
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
      <Footer />
    </>
  );
}

export default Homepage;
