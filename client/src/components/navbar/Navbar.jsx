import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import './navbar.css'
import logo from '../assets/logo.png'
import Destinations from '../destinations/Destinations'
import Zostel from '../zostel/Zostel'
import ZostelHomes from '../zostelHomes/ZostelHomes'
import ZostelPlus from '../zostelPlus/ZostelPlus'
import Longstays from '../longstays/Longstays'
import Franchise from '../franchise/Franchise'
import JoinUs from '../joinUs/JoinUs'
import Blog from '../blog/Blog'
import ZoWorld from '../zoWorld/ZoWorld'


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
            <Link style={{textDecoration: 'none'}} to="/">Destinations</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none'}} to="/zostel">Zostel</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none'}} to="/zostelHomes">Zostel Homes</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none'}} to="/zostelPlus">Zostel Plus</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none'}} to="/longstays">Longstays</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none'}} to="/franchise">Franchise</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none'}} to="/joinUs">Join us</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none'}} to="/blog">Blog</Link>
          </li>
          <button>
          <li>
            <Link style={{textDecoration: 'none'}} to="/zoWorld">\z/ Zo World</Link>
          </li>
          </button>
        </ul>
       </div>

        <hr />
        <Routes>
          <Route exact path="/" element={<Destinations />} />
          <Route path="/zostel" element={<Zostel />} />
          <Route path="/zostelHomes" element={ <ZostelHomes /> } />
          <Route path="/zostelPlus" element={<ZostelPlus />} />
          <Route path="/longstays" element={<Longstays />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/joinUs" element={<JoinUs />} />
          <Route path="/blog" element={<Blog /> } />
          <Route path="/zoWorld" element={<ZoWorld />} />
          </Routes>
      </div>
  
  );
}


