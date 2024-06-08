import "../App.css";
import logo from "../images/new_logo.png";

function Navbar2() {
  return (
    <div>
      <div className="header">
        <img className="logo-2" src={logo} alt="" />
        <div className="name-2">Stellar</div>
        <div className="nav-options-2">HOME</div>
        <div className="nav-options-2">ABOUT</div>
        <div className="nav-options-2">SERVICES</div>
        <div className="nav-options-2">WORKS</div>
        <div className="nav-options-2 contacts">CONTACTS</div>
      </div>
    </div>
  );
}

export default Navbar2;
