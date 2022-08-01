import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router";

export const Navbar = () => {

  let navigate = useNavigate()


  return (
    <div>
      <div className="navbarContainer"  >
        <div className="leftNavbar" onClick={() => navigate("/zostelHome")} >
          <img src="https://zostel-clone-kerrybli.vercel.app/static/media/zostel-logo.4a723159.svg" style={{ width: "200px" }} alt="pic" />
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
              to="/zostelHome"
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
