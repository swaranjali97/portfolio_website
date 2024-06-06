import "../App.css";
import leaf from "../images/leaf.jpg";
import girl from "../images/girl.jpg";
import lamp from "../images/lamp.jpg";
import camera from "../images/camera.jpg";
import kodak from "../images/kodak.png";
import man from "../images/man.jpg";
import stool from "../images/stool.jpg";
import plant from "../images/plant.jpg";
function Works() {
  return (
    <div className="works">
      <div className="recent-work">
        <p>03.</p>
        <p className="hr-line"></p>
        <p> RECENT WORKS</p>
      </div>
      <div className="works-headline">
        Here are some of our favorite projects we <br></br>have done lately.
        Feel free to check them<br></br> out.
      </div>
      <div className="grid3">
        <div className="leaf">
          <img src={leaf} alt=""></img>
        </div>
        <div className="girl">
          <img className="img" src={stool} alt=""></img>
        </div>
        <div className="girl">
          <img src={girl} alt=""></img>
        </div>
        <div className="girl">
          <img src={lamp} alt=""></img>
        </div>
        <div className="girl">
          <img src={camera} alt=""></img>
        </div>
        <div className="girl">
          <img src={kodak} alt=""></img>
        </div>
        <div className="girl">
          <img src={plant} alt=""></img>
        </div>

        <div className="girl">
          <img src={man} alt=""></img>
        </div>
      </div>
      {/* <div className="client-say">What Clients Are Saying</div> */}
    </div>
  );
}

export default Works;
