import React from 'react';
import {Home} from "./home.js";

export  const Header=(props)=>{
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#targetting">
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
          </button>
          <a href="#" className="navbar-brand">{props.homeLink}</a>
        </div>
        <div className="collapse navbar-collapse" id="targetting">
            <ul className="nav navbar-nav">
              <li className="nav-item"><a href="#">Home</a></li>
              <li className="nav-item"><a href="#">Service</a></li>
              <li className="nav-item"><a href="#">Contact</a></li>
            </ul>
        </div>
      </div>
      </nav>
    )
}
