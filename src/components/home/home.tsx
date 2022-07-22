import React from "react";

import Header from "../header/header";
import Intro from "../intro/intro";
import Footer from "../footer/footer";
import './home.scss';

const Home : React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Intro />
      <Footer />
    </div>
  )
}

export default Home;