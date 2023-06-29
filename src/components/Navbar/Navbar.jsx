import React from "react";
import logo from "../../assets/logo.png";
import globe from "../../assets/globe.svg";
import heart from "../../assets/heart.svg";
import bag from "../../assets/shopping-bag.svg";
import user from "../../assets/user.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <div className="navbar-right">
          <div className="navbar-region">
            <img
              src={globe}
              alt="globe-icon"
              style={{
                marginRight: "5px"
              }}
            />
            <p>India(English)</p>
            <span></span>
            <p>INR</p>
          </div>
          <div
            className="user-section"
            style={{
              display: "flex",
              gap: "1rem"
            }}
          >
            <img src={heart} alt="heart-img" />
            <img src={bag} alt="shopping-bag" />
            <img
              src={user}
              alt="user"
              style={{
                marginLeft: "0.5rem"
              }}
            />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
