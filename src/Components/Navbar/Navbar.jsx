import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div>
      <div className="navbarContainer" >
        <div className="leftNavbar">
          <img src={logo} alt="pic" />
        </div>
        <ul className="rightNavbar">
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              to="/zostel"
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              to="/"
            >
              Zostel
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              to="/zostelHomes"
            >
              Zostel Homes
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              to="/zostelPlus"
            >
              Zostel Plus
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              to="/longstays"
            >
              Longstays
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              to="/franchise"
            >
              Franchise
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              to="/joinUs"
            >
              Join us
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <button>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                to="/zoWorld"
              >
                \z/ Zo World
              </Link>
            </li>
          </button>
        </ul>
      </div>

      <hr />
    </div>
  );
};
