/**
 * ALL MEMBERS WORKED ON THIS PAGE: Aisha, Tarun, Mohan, Prateek
 * Imported necessary libraries and components, including React, FontAwesomeIcon from @fortawesome/react-fontawesome, various icons from @fortawesome/free-solid-svg-icons.
 * Created a Services function component that returns a JSX structure.
 * Set up a main div with class home-main and a heading for “OUR SERVICES”.
 * Created a banner for services with an image placeholder.
 * Set up a services div with a heading “Why Hire Us?” and a paragraph explaining the benefits of hiring.
 * Created a services-content div with four sections, each containing a heading and a paragraph explaining different aspects of the service, such as data guidance, candidness, philosophy, and reliability.
 * Added a couple of paragraphs with placeholder text and a sign-off from “The Richard Sanchez Team”.
 * Created a viewing-links div with three buttons for viewing listings for sale, contacting an agent, and viewing listings for rent.
 * Included a Footer component at the end of the page.
 * Exported the Services component for use in other parts of the application.



 */
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import Footer from './Footer';

function Services() {
    return (
        <>
          <div class="home-main">
            <h1 class="aboutus">OUR SERVICES</h1>
            <div id="banner-services" class="home-main">
              <div class="">
                <div class="arc-image-services"></div>
              </div>
              
                <div class="services">
                
                  <h1>Why Hire Us?</h1>
                  <p>
                    Find a variety of properties that suit you very easily <br></br>
                    Forget all difficulties in finding a residence for you
                  </p>
    
                  <div class="services-content">
                    <h3>1. We’re guided by the data.</h3>
                    <p>Our brokerage is one of the very few in Canada that houses its own data compilation, giving our agents an advantage over the rest. With over 10 years of statistics on the Ontario real estate market, we’re able to assess a property based on objective metrics. After all, numbers tell the story — emotions don’t.</p>

                    <h3>2. We’re candid. </h3>
                    <p>You’re only as honest as you are knowledgeable. That’s why an intimate understanding of your desired neighbourhood and its real estate offerings is key when picking the right agent. We protect our clients’ best interests by always being direct and informed, maximizing your odds of securing the right property.</p>

                    <h3>3. Our philosophy.</h3>
                    <p>'Big box’ brokerages impose sales quotas on their agents, and that kind of pressure often trickles down to the clientele. The culture is different at Strata. Our team of like-minded realtors work in a competitive-free environment, and share the same philosophy: We want to build long lasting relationships with our clients. Our objective is to be that go-to advisor for all of your real estate needs, and we understand that the only way to achieve that goal is to represent you at the highest level, consistently, and without any pressure. We move at your pace.</p>

                    <h3>4. We’re reliable</h3>
                    <p>Our brokerage is one of the very few in Canada that houses its own data compilation, giving our agents an advantage over the rest. With over 10 years of statistics on the Ontario real estate market, we’re able to assess a property based on objective metrics. After all, numbers tell the story — emotions don’t.</p>
                  </div>
    
                  <p>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English. Many
                    desktop publishing packages and web page editors now use Lorem
                    Ipsum as their default model text.
                  </p>

                  <p>Sincerely,</p>
                  <p>The Richard Sanchez Team</p>

                  <div class="viewing-links">
                  <button type="button" class="btn btn-info">VIEW LISTINGS FOR SALE</button>
                  <button type="button" class="btn btn-info">CONTACT AN AGENT</button>
                  <button type="button" class="btn btn-info">VIEW LISTINGS FOR RENT</button>
                  </div>
                </div>
              </div>
            </div>
            <div id='service-footer'>
            <Footer />
            </div>
            
        </>
      );
}

export default Services