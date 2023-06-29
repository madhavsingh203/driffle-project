import Circle from "../Circle/Circle";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="background-gradient"></div>
        <div className="circles">
          <Circle />
        </div>
        <div className="hero-text">
          <h3>
            Driffle is a{" "}
            <span
              style={{
                color: "#5DF5B5"
              }}
            >
              one-stop shop
            </span>{" "}
            for all your gaming needs.
          </h3>
          <p>
            Not only do we sell games, but also offer gift cards, DLC's, and
            more. Driffle is a marketplace, so you can find a wide variety of
            items from different sellers in one place. We are committed to the
            future of gaming and strive to make our platform safe, affordable,
            and sustainable for all users. Whether you're looking for the latest
            releases or hard-to-find classics, you're sure to find what you're
            looking for on Driffle.
          </p>
          <button>visit Our Store</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
