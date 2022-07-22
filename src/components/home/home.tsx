import React from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import './home.scss';

const Home : React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Footer />
    </div>
  )
}

export default Home;