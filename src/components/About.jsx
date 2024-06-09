import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div class="home-main">
        <h1 class="aboutus">ABOUT US</h1>
        <div id="banner" class="home-main">
          <div class="banner-image">
            <div class="arc-image"></div>
          </div>
          <div class="title" id="title01">
            <div class="title">
              <h6>Our Value</h6>
              <h1>Value We Give to You</h1>
              <p>
                Find a variety of properties that suit you very easily <br></br>
                Forget all difficulties in finding a residence for you
              </p>

              <div class="collapse-market">
                <div class="market">
                  <p class="d-inline-flex gap-1" id="market">
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      id="market"
                    >
                      <FontAwesomeIcon icon={faShieldHalved} id="market-icon" />
                      Best interest rates on the market
                      <FontAwesomeIcon
                        icon={faCircleArrowDown}
                        id="arrowdown"
                      />
                    </button>
                  </p>
                  <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>

                <div class="market">
                  <p class="d-inline-flex gap-1" id="market">
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseprice"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      id="market"
                    >
                      <FontAwesomeIcon
                        icon={faRectangleXmark}
                        id="market-icon"
                      />
                      Prevent unstable prices
                      <FontAwesomeIcon
                        icon={faCircleArrowDown}
                        id="arrowdown"
                      />
                    </button>
                  </p>
                  <div class="collapse" id="collapseprice">
                    <div class="card card-body">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>

                <div class="market">
                  <p class="d-inline-flex gap-1" id="market">
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsemarket"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      id="market"
                    >
                      <FontAwesomeIcon
                        icon={faMoneyCheckDollar}
                        id="market-icon"
                      />
                      Best price on the market
                      <FontAwesomeIcon
                        icon={faCircleArrowDown}
                        id="arrowdown"
                      />
                    </button>
                  </p>
                  <div class="collapse" id="collapsemarket">
                    <div class="card card-body">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
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

export default About;
