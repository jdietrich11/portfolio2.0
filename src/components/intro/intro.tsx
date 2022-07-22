import React from "react";

import './intro.scss';

const Intro : React.FC = () => {
  return (
    <div className="intro-container">
      <div className="backgroundImg"></div>
      <div className="intro">
        <div className="text-container">
        <div className="text grey">
        {`<html>` } <br />
          <div className="text grey">
          {`<body>`} <br />
          <div className="text grey">
            {`<p>`} <br />
            <div className="text">   
              I'm an aspiring web developer. I'm currently looking to begin a
              by taking courses on UDEMY and building projects to gain
              professional career in programming. Currently my focus is learning
              experience.
            </div>  
            {`</p>`} <br />
          </div>
          {`</body>`} <br />
          </div>
        {`</html>`} <br />        
        </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;