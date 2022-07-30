import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import logo from '../assets/logo.png'



export default function Navbar() {
  return (
    
      <div>
       <div className="navbarContainer">
            <div className="leftNavbar">
                <img src={logo} alt="pic" />
                <h1>ZOSTEL</h1>
            </div>
        <ul className="rightNavbar">
          <li>
            <Link style={{textDecoration: 'none', color: "black", fontWeight:"bold"}} to="/">Destinations</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: "black", fontWeight:"bold" }} to="/zostel">Zostel</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: "black", fontWeight:"bold" }} to="/zostelHomes">Zostel Homes</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none' , color: "black", fontWeight:"bold"}} to="/zostelPlus">Zostel Plus</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: "black", fontWeight:"bold"}} to="/longstays">Longstays</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: "black", fontWeight:"bold"}} to="/franchise">Franchise</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: "black", fontWeight:"bold"}} to="/joinUs">Join us</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: "black", fontWeight:"bold"}} to="/blog">Blog</Link>
          </li>
          <button>
          <li>
            <Link style={{textDecoration: 'none', color: "black", fontWeight:"bold"}} to="/zoWorld">\z/ Zo World</Link>
          </li>
          </button>
        </ul>
       </div>

        <hr />
      
      </div>
  
  );
}


