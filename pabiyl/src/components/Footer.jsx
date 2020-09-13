import React from "react";
import "./footer.css";
function Footer() {
  return (
    <section className="main__footer">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/elevated-disk-182414.appspot.com/o/photos%2Ffoto1.jpg?alt=media&token=498d197f-bff9-4673-aadf-c23aa5189df2"
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
