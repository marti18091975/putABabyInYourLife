import React from "react";
import "./footer.css";
function Footer() {
  return (
    <section className="main__footer">
      <img
        src="https://media-exp1.licdn.com/dms/image/C5603AQEZPiAr7_RCxA/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=z8RyBtkp3SCyRZEnFBW1KU286hrCLlbxDYxbfSLyen8"
        className="image__footer"
      ></img>
      <div className="text__footer">Martí Amat Vila</div>

      <img
        src="https://www.skylabcoders.com/images/403/default.png"
        className="icon__footer"
      ></img>
    </section>
  );
}
export default Footer;
