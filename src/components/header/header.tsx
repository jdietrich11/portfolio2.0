import React from "react";
import IcomoonReact, {iconList} from "icomoon-react";

import iconSet from '../../assets/selection.json';

import './header.scss';

const Header : React.FC = () => {
  return (
    <div className="header">
    <div className="menu">
      <div className='home'>
        <div className="item">
          <IcomoonReact 
            iconSet={iconSet}
            icon='home-outline'
            className="icon icon-home"
          />
        </div>
      </div>
        <div className='locations'>
          <div className='item'>
            <IcomoonReact 
              iconSet={iconSet} 
              icon='user-outline' 
              className="icon icon-user" 
            />
          </div>
          <div className='item' >
            <IcomoonReact 
              iconSet={iconSet} 
              icon='code-outline' 
              className="icon icon-code" 
              />
          </div>
          <div className='item'>
            <IcomoonReact 
              iconSet={iconSet} 
              icon='export-outline' 
              className="icon icon-export" 
              />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Header;