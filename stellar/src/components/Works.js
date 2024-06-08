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
        <div className="girl">
          <img className="img" src={leaf} alt=""></img>
        </div>
        <div className="girl">
          <img className="img" src={stool} alt=""></img>
        </div>
        <div className="girl">
          <img className="img" src={girl} alt=""></img>
        </div>
        <div className="girl">
          <img className="img" src={lamp} alt=""></img>
        </div>
        <div className="girl">
          <img className="img" src={camera} alt=""></img>
        </div>
        <div className="girl">
          <img className="img" src={kodak} alt=""></img>
        </div>
        <div className="girl">
          <img className="img" src={plant} alt=""></img>
        </div>
        <div className="girl">
          <img className="img" src={man} alt=""></img>
        </div>
      </div>
      <div className="client-say">What Clients Are Saying ...</div>
      <div className="testimonials-container">
        <div className="testimonials-flex">
          <div className="grid4">
            <div>
              <div className="grid4-para">
                Sit ut cum molestiae. Dolore ducimus qui<br></br> quasi. Fugiat
                consequatur sit vel illum vel<br></br> et a delectus. Vel sequi
                vitae voluptatem<br></br> perspiciatis eligendi. Voluptatibus
                optio
                <br></br>
                natus asperiores est commodi amet quia <br></br>architecto.
                Dolores necessitatibus et.
              </div>
              <div>tim cook</div>
            </div>
            <div>
              <div className="grid4-para">
                Sit ut cum molestiae. Dolore ducimus qui<br></br> quasi. Fugiat
                consequatur sit vel illum vel<br></br> et a delectus. Vel sequi
                vitae voluptatem<br></br> perspiciatis eligendi. Voluptatibus
                optio
                <br></br>
                natus asperiores est commodi amet quia <br></br>architecto.
                Dolores necessitatibus et.
              </div>
              <div>Sundar Pichai</div>
            </div>
          </div>
          {/* ..........testimonial second page.......... */}
          <div className="grid4">
            <div>
              <div className="grid4-para">
                Sit ut cum molestiae. Dolore ducimus qui<br></br> quasi. Fugiat
                consequatur sit vel illum vel<br></br> et a delectus. Vel sequi
                vitae voluptatem<br></br> perspiciatis eligendi. Voluptatibus
                optio
                <br></br>
                natus asperiores est commodi amet quia <br></br>architecto.
                Dolores necessitatibus et.
              </div>
              <div>tim cook</div>
            </div>
            <div>
              <div className="grid4-para">
                Sit ut cum molestiae. Dolore ducimus qui<br></br> quasi. Fugiat
                consequatur sit vel illum vel<br></br> et a delectus. Vel sequi
                vitae voluptatem<br></br> perspiciatis eligendi. Voluptatibus
                optio
                <br></br>
                natus asperiores est commodi amet quia <br></br>architecto.
                Dolores necessitatibus et.
              </div>
              <div>Sundar Pichai</div>
            </div>
          </div>
          {/* .......dots........ */}
        </div>
      </div>
      <div className="dots">
        <div class="dot active"></div>
        <div class="dot"></div>
      </div>
    </div>
  );
}

export default Works;
