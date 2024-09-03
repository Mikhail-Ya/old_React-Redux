import React from 'react';
import e from'./Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
      <div className= {e.bar}>
        <ul>
          <li><NavLink to="/profile" activeClassName={e.active}>Profile</NavLink></li>
          <li><NavLink to="/dialogs" activeClassName={e.active}>Messages</NavLink></li>
          <li><NavLink to="/news" activeClassName={e.active}>News</NavLink></li>
          <li><NavLink to="/music" activeClassName={e.active}>Music</NavLink></li>
          <li><NavLink to="/settings" activeClassName={e.active}>Settings</NavLink></li>
            <li><NavLink to="/users" activeClassName={e.active}>Users</NavLink></li>
        </ul>
      </div>  
    )
}
export default Navbar;