import "../App.css";
import logo from "../images/new_logo.png";

function Navbar2() {
  return (
    <div>
      <div className="header">
        <img className="logo-2" src={logo} alt="" />
        <div className="name-2">Stellar</div>
        <div className="nav-options-2">
          <a href="#home" className="navoptions-color">
            HOME
          </a>
        </div>
        <div className="nav-options-2">
          <a href="#about" className="navoptions-color">
            ABOUT
          </a>
        </div>
        <div className="nav-options-2">
          <a href="#services" className="navoptions-color">
            SERVICES
          </a>
        </div>
        <div className="nav-options-2">
          <a href="#works" className="navoptions-color">
            WORKS
          </a>
        </div>
        <div className="nav-options-2 contacts">
          <a href="contact" className="navoptions-color">
            CONTACTS
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
