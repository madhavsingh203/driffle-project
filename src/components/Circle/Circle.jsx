import "./Circle.css";
import fifa from "../../assets/fifa.png";
import minecraft from "../../assets/minecraft.png";
import mk11 from "../../assets/mortal-kombat.png";
import xbox from "../../assets/xbox.png";
import batman from "../../assets/batman.png";
import gta from "../../assets/gta.png";
const Circle = () => {
  return (
    <>
      <div className="wrapper">
        <div className="fifa-container">
          <img src={fifa} alt="fifa" className="fifa-img" />
          <img src={minecraft} alt="minecraft" className="minecraft-img" />
          <img src={mk11} alt="mk11" className="mk11-img" />
        </div>
        <div className="middle-circle">
          <div className="batman">
            <img src={batman} alt="batman-img" />
          </div>
          <img src={xbox} alt="xbox-img" className="xbox-img" />
        </div>
        <div className="inner-circle">
          <div className="gta">
            <img src={gta} alt="gta-img" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Circle;
