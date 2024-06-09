/**
 * WORKED ON THIS PAGE: Aisha Adediran (8859425)
 *
 *  - I made the page responsive by using bootstrap and css stylings.
 *  - I imported dependencies such as React,useSate, useEffect, FontAwesomeIcons, Swiper and Swiper Slides.
 *  - i had three state variables premiumProductsCount, HappyCustomersCount and awardwimmnerscount.
 *  - I made use of UseEffect Hook to increment the state variables at regular intervals.
 *  -  The main Component of the page is the Home function component. it returns a JSX structure that represents the UI of the page.
 *  - The Banner Section includes the title of the page, image that represents the company,  and a number count that display for premium products, happy customers and awards winners.
 *  - Logo Slider: a Swiper component that displays logo of companies we have partnered with.
 *  -Card Slider: Another Swiper component is used to create a slider for displaying various cards. Each card includes an image, price, title, description, and a button. These cards represent information about the properties we sell.
 *  About, Services, and Contact Sections: The About, Services, and Contact components are rendered in their respective sections but imported on the home page.
 *  Footer: The Footer component is rendered at the end of the page.
 *
 */

import React, { useState, useEffect } from "react";
import location from "../images/location.png";
import Acre from "../images/Acre-Logo_light.svg";
import ccg from "../images/ccg.png";
import pebble from "../images/pebblebrook.svg";
import pinnacle from "../images/pinnacle.svg";
import rendina from "../images/Rendina-Logo-Website.png";
import renewal from "../images/Renewa_logo_60H.png";
import seren from "../images/serenbe.png";
import north1 from "../images/north1.png";
import north2 from "../images/north2.png";
import house1 from "../images/houses/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg";
import house2 from "../images/houses/florian-schmidinger-b_79nOqf95I-unsplash.jpg";
import house3 from "../images/houses/john-fornander-Id7u0EkTjBE-unsplash.jpg";
import house4 from "../images/houses/pexels-alex-staudinger-1732414.jpg";
import house5 from "../images/houses/pexels-binyamin-mellish-1396122.jpg";
import house6 from "../images/houses/pexels-expect-best-323776.jpg";
import house7 from "../images/houses/pexels-max-vakhtbovycn-7031607.jpg";
import house8 from "../images/houses/pexels-pixabay-53610.jpg";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Footer from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
function Home() {
  const [premiumProductsCount, setPremiumProductsCount] = useState(0);
  const [happyCustomersCount, setHappyCustomersCount] = useState(0);
  const [awardWinnersCount, setAwardWinnersCount] = useState(0);

  useEffect(() => {
    const premiumProductsInterval = setInterval(() => {
      if (premiumProductsCount < 1320) {
        setPremiumProductsCount((prevCount) => prevCount + 1);
      }
    }, 10);

    const happyCustomersInterval = setInterval(() => {
      if (happyCustomersCount < 640) {
        setHappyCustomersCount((prevCount) => prevCount + 1);
      }
    }, 10);

    const awardWinnersInterval = setInterval(() => {
      if (awardWinnersCount < 120) {
        setAwardWinnersCount((prevCount) => prevCount + 1);
      }
    }, 10);

    return () => {
      clearInterval(premiumProductsInterval);
      clearInterval(happyCustomersInterval);
      clearInterval(awardWinnersInterval);
    };
  }, [premiumProductsCount, happyCustomersCount, awardWinnersCount]);

  return (
    <>
      <div class="home-main">
        <div id="banner">
          <div class="title01">
            <div class="title">
              <h1>
                Discover Your Best Spec of Property to Suit your Life Style
              </h1>
              <p>
                Find a variety of properties that suit you very easily <br></br>
                Forget all difficulties in finding a residence for you
              </p>

              <div className="input-group" style={{ width: "50%" }} id="search">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="form-control"
                  placeholder="Search"
                />
                <button class="btn btn-primary" type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>

              <div id="number-count">
                <div class="per-one-number-count">
                  <div>
                    {premiumProductsCount}{" "}
                    <FontAwesomeIcon icon={faPlus} id="faplus" />
                  </div>
                  <p>Premium Products</p>
                </div>
                <div class="per-one-number-count">
                  <div>
                    {happyCustomersCount}{" "}
                    <FontAwesomeIcon icon={faPlus} id="faplus" />
                  </div>
                  <p>Happy Customers</p>
                </div>
                <div class="per-one-number-count">
                  <div>
                    {awardWinnersCount}{" "}
                    <FontAwesomeIcon icon={faPlus} id="faplus" />
                  </div>
                  <p>Award Winners</p>
                </div>
              </div>
            </div>
          </div>
          <div class="banner-image">
            <div class="arc-image"></div>
          </div>
        </div>

        {/***********LOGO SLIDER********** */}

        <div id="companies-slider">
          <Swiper
            slidesPerView={4.5}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              375: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Acre} alt="acre" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={north1} alt="acre" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ccg} alt="acre" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pebble} alt="acre" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pinnacle} alt="acre" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={rendina} alt="acre" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={renewal} alt="acre" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={north2} alt="acre" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/********SECOUND SECTION************ */}
        <div id="sec-section">
          <p>Best Choices</p>
          <h1>Popular Residences</h1>
        </div>

        <div id="card-slider">
          <Swiper
            slidesPerView={4.5}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              375: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                class="card"
                style={{ width: "15rem", background: "#000", color: "#fff" }}
                id="card"
              >
                <img src={house1} alt="acre" />
                <div class="card-body">
                  <h6>$ 56788</h6>
                  <h5 class="card-title">Eko Atlantic Building</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" class="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="card"
                style={{ width: "15rem", background: "#000", color: "#fff" }}
              >
                <img src={house2} alt="acre" />
                <div class="card-body">
                  <h6>$ 56788</h6>
                  <h5 class="card-title">Perison Garden City</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" class="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="card"
                style={{ width: "15rem", background: "#000", color: "#fff" }}
              >
                <img src={house3} alt="acre" />
                <div class="card-body">
                  <h6>$ 56788</h6>
                  <h5 class="card-title">Gariki Estate</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" class="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="card"
                style={{ width: "15rem", background: "#000", color: "#fff" }}
              >
                <img src={house4} alt="acre" />
                <div class="card-body">
                  <h6>$ 56788</h6>
                  <h5 class="card-title">Molped Estate</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" class="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="card"
                style={{ width: "15rem", background: "#000", color: "#fff" }}
              >
                <img src={house5} alt="acre" />
                <div class="card-body">
                  <h6>$ 56788</h6>
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" class="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="card"
                style={{ width: "15rem", background: "#000", color: "#fff" }}
              >
                <img src={house6} alt="acre" />
                <div class="card-body">
                  <h6>$ 56788</h6>
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" class="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="card"
                style={{ width: "15rem", background: "#000", color: "#fff" }}
              >
                <img src={house7} alt="acre" />
                <div class="card-body">
                  <h6>$ 56788</h6>
                  <h5 class="card-title">Lekki Gardens</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" class="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="card "
                style={{ width: "15rem", background: "#000", color: "#fff" }}
              >
                <img src={house8} alt="acre" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" class="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default Home;
