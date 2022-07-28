import React from "react";
import {
  BrowserRouter as Router,
  Switch,
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
    <Router>
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
        <Switch>
          <Route exact path="/">
            <Destinations />
          </Route>
          <Route path="/zostel">
            <Zostel />
          </Route>
          <Route path="/zostelHomes">
            <ZostelHomes />
          </Route>
          <Route path="/zostelPlus">
            <ZostelPlus />
          </Route>
          <Route path="/longstays">
            <Longstays />
          </Route>
          <Route path="/franchise">
            <Franchise />
          </Route>
          <Route path="/joinUs">
            <JoinUs />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/zoWorld">
            <ZoWorld />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


