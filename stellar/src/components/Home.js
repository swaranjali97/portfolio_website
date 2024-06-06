import React from "react";
import "../App.css";
import logo from "../images/new_logo.png";
import fb from "../images/fb.png";
import twitter from "../images/twitter.png";
import insta from "../images/insta.png";
import dribble from "../images/dribble.png";
import behence from "../images/behence.png";
function Home() {
  return (
    <div className="row-flex-main home">
      <div className=" flex-col">
        {/* navbar */}
        <div className="navbar flex-row">
          <img className="logo" src={logo} alt="" />
          <div className="name">Stellar</div>
          <div className="nav-options home-icon">HOME</div>
          <div className="nav-options">ABOUT</div>
          <div className="nav-options">SERVICES</div>
          <div className="nav-options">WORKS</div>
          <div className="nav-options">CONTACTS</div>
        </div>

        {/* headline */}
        <div className="head-line">
          <p>
            We provide creative<br></br> solutions to turn your <br></br>ideas
            into digital reality
          </p>
        </div>

        {/* textbox */}
        <div className="input-text">
          <div>
            <span>
              MORE ABOUT US <b>&#8594;</b>
            </span>
          </div>
        </div>
      </div>

      {/* main-row-flex started*/}
      {/* play button */}
      <div className="container">
        <div className="circle"></div>
        <div className="triangle"></div>
        <div className="play-vd">PLAY VIDEO</div>
      </div>
      {/* right-icons */}
      <div className="right-icons">
        <div>
          <img className="fb" src={fb} alt="" />
        </div>
        <div>
          <img className="fb" src={twitter} alt="" />
        </div>
        <div>
          <img className="fb" src={insta} alt="" />
        </div>
        <div>
          <img className="fb" src={behence} alt="" />
        </div>
        <div>
          <img className="fb" src={dribble} alt="" />
        </div>
        <div>
          <div className="line"></div>
        </div>
        <div>
          <div className="scroll">SCROLL</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
