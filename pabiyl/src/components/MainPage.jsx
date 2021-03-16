import React from "react";
import "./mainPage.scss";
import { NavLink } from "react-router-dom";

function MainPage(props) {
  return (
    <main className="main__main">
      <div className="title__main">Put a baby in your life</div>
      <div className="navigation__container">
        <NavLink to="/profile" className="navigation__text">
          PROFILE
        </NavLink>
        <NavLink to="/searchFilters/" className="navigation__text">
          FIND USERS
        </NavLink>
        <NavLink to="/messages" className="navigation__text">
          MESSAGES
        </NavLink>
        <section className="main__footer">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQEZPiAr7_RCxA/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=z8RyBtkp3SCyRZEnFBW1KU286hrCLlbxDYxbfSLyen8"
            className="image__footer"
            alt=""
          ></img>
          <div className="text__footer">Martí Amat Vila</div>

          <img
            src="https://www.skylabcoders.com/images/403/default.png"
            className="icon__footer"
            alt=""
          ></img>
        </section>
      </div>
    </main>
  );
}
export default MainPage;
