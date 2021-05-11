import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import logoPhoto from '../../images/logo/LOGO-07.png';
// import styles from '../../../sass/app.scss';

const header = ({
  navRoute, getNavRoute
}) => {
  useEffect(() => {
    getNavRoute()
  }, []);
  return (
      <header className="header text-left auto-header-hight">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top mainbgcolor">
          <div className="container">
            <a href="/" className="navbar-brand">
              <img
                className="img-fluid p-0 col-12"
                src= { logoPhoto }
              />
            </a>
  
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#Headernavbar"
              aria-controls="HeadernavbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="Headernavbar">
              <ul className="navbar-nav px-0 px-md-2 ml-auto">
                {navRoute.map((item, index) => {
                  return (
                    <li
                      className="nav-item nav-link px-lg-2 px-1"
                      key= {index}
                    >
                      <Link to={ item.link } className="nav-link pl-2">{ item.word }</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
  );
};

export default header;