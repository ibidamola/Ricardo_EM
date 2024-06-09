/** WORKED ON THIS PAGE BY: Aisha Adediran (8859425)
 * -  Importing Dependencies: The page imports several dependencies such as React, useState, Link, Outlet, and animateScroll.

  * - State Variables: A state variable isNavOpen is declared to handle the opening and closing of the navigation menu.

  * -Toggle Function: A function toggleNav is defined to toggle the state of isNavOpen.

  * -Scroll Function: A function scrollToSection is defined to scroll to a specific section of the page when a link is clicked. It also calls toggleNav to close the navigation menu after clicking a link.

  * -Main Component: The main component of the page is the Navbar function component. It returns a JSX structure that represents the UI of the Navbar.

  * -Navigation Bar: The navigation bar includes a logo and a button to toggle the navigation menu. The navigation menu contains links to different sections of the website: Home, About, Contact Us, Our Services, and Reviews.

  * -Outlet Component: The Outlet component is rendered at the end of the Navbar component. This component is used to render any child routes.
 */

import React, {useState} from "react";

import { Link, Outlet } from "react-router-dom";
import logo from "../images/logo192.png";
import ricard from "../images/houses/Ricardo SANTIGO .RE (2).png";
import { animateScroll as scroll} from "react-scroll";

function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToSection = (sectionId) => {
   
    scroll.scrollTo(sectionId, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
    toggleNav(); // Close the navigation menu after clicking a link
  };
  return (
    <>
      <div>
        <nav className= "navbar navbar-expand-lg"  style={{ padding:"0", transition: "height 0.5s" }}>
          <div class="container-fluid">
            <Link to="/" className="logo">
              <img
                src={ricard}
                alt="logo"
                style={{ width: "100px", height: "100px" }}
              />
            </Link>

            <button
            className={`navbar-toggler ${isNavOpen ? 'active' : ''}`}
              
              onClick={toggleNav}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
             className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
              id="navbarNav"
              style={{ marginLeft: "60%" }}
            >
              <ul class="navbar-nav" id="navlist">
                <li class="nav-item">
                  <Link to="/" class="nav-link active">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link"
                  onClick={() => scrollToSection("about")}>
                    About
                  </Link>
                </li>
                <li class="nav-item">
                 <Link to="/Contact" class="nav-link"  onClick={() => scrollToSection("contact")}> Contact Us </Link>
                </li>
                <li class="nav-item">
                 <Link to="/Services" class="nav-link"> Our Services </Link>
                </li>
                <li class="nav-item">
                 <Link to="/Reviews" class="nav-link"> Reviews </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>



      
    </>
  );
}

export default Navbar;
