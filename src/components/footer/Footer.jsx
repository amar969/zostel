import React from "react";
import "./footer.css";
import logo from '../assets/logo.png'
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import twitter from "../assets/twitter.png";
import yt from "../assets/yt.png";

const Footer = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="content">
          <div className="firstCols">
            <div>
                <img src={logo} alt="pic" />
                <h1>ZOSTEL</h1>
            </div>
            <p>
            The website ends here, but your journey to the remotest destinations in India and Nepal begins with Zostel. Explore with our social hostels, homestays, and luxury stays on your next holiday.
            </p>
          </div>

          <div className="firstCol">
            <p className="footHeading">UseFul Links</p>
            <div className="secondColumn">
              <div>
                <p>Zostel Homes</p>
                <p>#ITravel Green</p>
                <p>Guest Policies</p>
                <p>Privacy Policy</p>
                <p>Careers</p>
              </div>

              <div>
                <p>Destinations</p>
                <p>Franchise</p>
                <p>Contact Us</p>
                <p>Cookie Policy</p>
                <p>Passport</p>
              </div>
              <div>
                <p>Community Manager</p>
                <p>About Us</p>
                <p>Support</p>
                <p>Terms</p>
                <p>COVID-19 FAQs</p>
              </div>
            </div>
          </div>


          <div className="thirdCol">
            <p className="footHeading">Social</p>
            <div className="socialIcon">
              <img src={fb} alt="Facebook" />
              <img src={ig} alt="Instagram" />
              <img src={twitter} alt="Twitter" />
              <img src={yt} alt="YouTube" />
            </div>
            <div className="copyRight">Zostel © 2020. All Rights Reserved</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer ;
