/**
 * WORKED ON THE FOOTER COMPONENT BY AISHA ADEDIRAN (8859425).
 * Created a Footer function component that returns a JSX structure.
 * Set up a div with class footer which contains another div with class footer-content.
 * Inside the footer-content div, an image is displayed using the imported footerlogo as the source.
 * Added a paragraph with copyright information for “Ricardo Sanchez Real Estate EST. 1994”.
 * Exported the Footer component for use in other parts of the application.
 */
import React from "react";
import footerlogo from "../images/houses/Ricardo SANTIGO .RE (3).png";

function Footer() {
  return (
    <>
      <div class="footer">
        <div class="footer-content">
          <img src={footerlogo} alt="footer-logo" />

          <p>
            {" "}
            <em>copyright &copy; Ricardo Sanchez Real Estate EST. 1994</em>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
