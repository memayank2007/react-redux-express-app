import React from 'react';
import {Link } from  'react-router';

export default () => {
  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to ="/" className="bavbar-brand">Red Dice</Link>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-bar navbar-right">
            <li> <Link to ="/signup">SignUp</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
