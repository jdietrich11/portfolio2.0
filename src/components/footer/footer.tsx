import React from "react";
import IcomoonReact, {iconList} from "icomoon-react";

import iconSet from '../../assets/selection.json';

import './footer.scss';

const Footer : React.FC = () => {
  return (
    <div className="footer">
      <div className="icons">
        <div className="item">
          <IcomoonReact 
            iconSet={iconSet}
            icon='social-linkedin-circular'
            className="icon icon-linkedIn"
          />
        </div>
        <div className="item">
          <IcomoonReact 
            iconSet={iconSet}
            icon='github'
            className="icon icon-github"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer;