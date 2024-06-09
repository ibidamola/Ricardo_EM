/**
 * Helped make this page:
 *    - Mohan Krishna Reddy Putreddy (8870673)
 * 
 */

import React from "react";
import Footer from "./Footer";
import floridaHouse from "../images/houses/florian-schmidinger-b_79nOqf95I-unsplash.jpg";
import floridaHouse2 from "../images/houses/john-fornander-Id7u0EkTjBE-unsplash.jpg";
import floridaHouse3 from "../images/houses/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg";
import floridaHouse4 from "../images/houses/pexels-binyamin-mellish-1396122.jpg";
import floridaHouse5 from "../images/houses/pexels-pixabay-53610.jpg";


function Reviews() {
  return (
    <>
      <main class="reviews">
        <div class="center-text">
          <h1>Customer Reviews</h1>
        </div>

        <div class="review-section">
          <div class="review">
            <img src={floridaHouse} alt="Florida House" />
            <h5>4 April 2024</h5>
            <h4>Peter Parker</h4>
            <p>
              This charming Florida house is nestled in a quiet neighborhood, featuring
              spacious rooms, a beautifully landscaped backyard, and a cozy patio
              perfect for entertaining guests or enjoying a morning coffee. With its
              convenient location close to parks, schools, and shopping centers, this
              home offers both comfort and convenience for its residents.
            </p>
          </div>
          <div class="review">
            <img src={floridaHouse2} alt="Florida House 2" />
            <h5>2 Aug 2023</h5>
            <h4>Optimus Prime</h4>
            <p>
              This modern Florida house boasts sleek design elements, state-of-the-art
              appliances, and panoramic views of the surrounding landscape. With its
              open-concept layout and luxurious amenities, this home is perfect for
              those seeking a blend of style and sophistication.
            </p>
          </div>
          <div class="review">
            <img src={floridaHouse3} alt="Florida House 3" />
            <h5>23 Sept 2023</h5>
            <h4>Bruce Wayne</h4>
            <p>
              Nestled amidst lush greenery, this Florida house offers tranquility and
              serenity in abundance. Featuring a spacious outdoor deck, a cozy
              fireplace, and elegant interior finishes, this home provides the perfect
              retreat for relaxation and rejuvenation.
            </p>
          </div>
          <div class="review">
            <img src={floridaHouse4} alt="Florida House 4" />
            <h5>26 Mar 2024</h5>
            <h4>Mary Jane</h4>
            <p>
              With its classic architectural charm and modern amenities, this Florida
              house exudes warmth and elegance. From its inviting front porch to its
              expansive backyard oasis, this home offers a timeless retreat for
              families and friends to create lasting memories.
            </p>
          </div>
          <div class="review">
            <img src={floridaHouse5} alt="Florida House 5" />
            <h5>30 Feb 2024</h5>
            <h4>Harry Potter</h4>
            <p>
              Situated in a picturesque setting, this Florida house captures the essence
              of coastal living. With its bright and airy interior, beach-inspired decor,
              and breathtaking ocean views, this home offers a tranquil escape from the
              hustle and bustle of everyday life.
            </p>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Reviews;
