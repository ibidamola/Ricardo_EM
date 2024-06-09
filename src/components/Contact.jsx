import React from "react";
import video from "../videos/pexels-kindel-media-7578546 (2160p).mp4";
import Footer from "./Footer";
function Contact() {
  return (
    <>
      <div class="home-main">
        <h1 class="aboutus">CONTACT US</h1>

        <div>
          <div class="contactvideo">
            <video className="video" autoPlay muted loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <h5 class="contact-details">CONTACT DETAILS</h5>
        <div id="contact-form">
          <form>
            <div class="row">
              <div class="col">
                <label for="inputEmail4" class="First name">
                  First name
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="First name"
                  required
                />
              </div>
              <div class="col">
                <label for="inputEmail4" class="Last name">
                  Last name
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Last name"
                  required
                />
              </div>
            </div>

            <div class="row g-3">
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  aria-label="Email"
                  required
                />
              </div>
              <div class="col">
                <label for="inputEmail4" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  aria-label="phone number"
                  required
                />
              </div>
            </div>
            <div class="col">
              <label for="Message" class="form-label">
                Message
              </label>
              <textarea
                type="text"
                class="form-control"
                aria-label="Message"
                required
              />
            </div>
          </form>
        </div>
      </div>

      <div id="service-footer">
        <Footer />
      </div>
    </>
  );
}

export default Contact;
