import React from "react";
import "../App.css";
// import logo from "../images/new_logo.png";
import planning from "../images/planning.png";
import tools from "../images/tools.png";
import branding from "../images/branding.png";
import doc from "../images/doc.png";
function About() {
  return (
    <div className="about" id="about">
      {/* <div className="header">
        <img className="logo-2" src={logo} alt="" />
        <div className="name-2">Stellar</div>
        <div className="nav-options-2">HOME</div>
        <div className="nav-options-2">ABOUT</div>
        <div className="nav-options-2">SERVICES</div>
        <div className="nav-options-2">WORKS</div>
        <div className="nav-options-2 contacts">CONTACTS</div>
      </div> */}
      <div className="who-we-are">
        <p>01.</p>
        <p className="hr-line"></p>
        <p> WHO WE ARE</p>
      </div>
      <div className="para">
        Stellar is branding agency based in<br></br>Somewhere.We design
        thoughtfull digital<br></br> experiences and beautiful brand asthetics.
      </div>
      <div className="para-2">
        Quia iusto totam facilis ut atque quidem quis maiores iure. Facilis
        mollitia enim illo sed et <br></br>totam commodi. Velit a recusandae
        sequi consequatur est dolorum. Eaque accusantium <br></br>praesentium ut
        omnis. Laboriosam reprehenderit commodi assumenda.
      </div>
      <div className="grid">
        <div className="planing">
          <div className="title">
            <div className="image-planning">
              <img src={planning} alt="" />
            </div>
            <div className="planning-text">Planning</div>
          </div>
          <div className="grid-text">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            <br></br>
            posuere cubilia Curae; Donec velit neque, auctor sit amet<br></br>
            aliquam vel, ullamcorper sit amet ligula. Praesent sapien<br></br>
            massa, convallis a pellentesque nec, egestas non nisi. Nulla
            <br></br>
            porttitor accumsan tincidunt. Cras ultricies ligula sed magna
            <br></br>dictum porta.
          </div>
        </div>
        <div className="branding">
          <div className="title">
            <div className="image-planning">
              <img src={branding} alt="" />
            </div>
            <div className="planning-text">Branding</div>
          </div>
          <div className="grid-text">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            <br></br>
            posuere cubilia Curae; Donec velit neque, auctor sit amet<br></br>{" "}
            aliquam vel, ullamcorper sit amet ligula. Praesent sapien<br></br>{" "}
            massa, convallis a pellentesque nec, egestas non nisi. Nulla
            <br></br>
            porttitor accumsan tincidunt. Cras ultricies ligula sed magna{" "}
            <br></br>dictum porta.
          </div>
        </div>
        <div className="implementation">
          <div className="title">
            <div>
              <img className="tools-img" src={tools} alt="" />
            </div>
            <div className="planning-text">Implementation</div>
          </div>
          <div className="grid-text">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            <br></br>
            posuere cubilia Curae; Donec velit neque, auctor sit amet<br></br>
            aliquam vel, ullamcorper sit amet ligula. Praesent sapien<br></br>
            massa, convallis a pellentesque nec, egestas non nisi. Nulla
            <br></br>
            porttitor accumsan tincidunt. Cras ultricies ligula sed magna
            <br></br>dictum porta.
          </div>
        </div>
        <div className="documentation">
          <div className="title">
            <div>
              <img className="tools-img" src={doc} alt="" />
            </div>
            <div className="planning-text">Documentation</div>
          </div>
          <div className="grid-text">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            <br></br>
            posuere cubilia Curae; Donec velit neque, auctor sit amet<br></br>
            aliquam vel, ullamcorper sit amet ligula. Praesent sapien<br></br>
            massa, convallis a pellentesque nec, egestas non nisi. Nulla
            <br></br>
            porttitor accumsan tincidunt. Cras ultricies ligula sed magna
            <br></br>dictum porta.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
