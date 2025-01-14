import React from "react";
import "./TestimonialsPage.css";
import logo from "../assets/GalleryPage/logo.png";
import khmer from "../assets/GalleryPage/Khmer Theme.jpg";
import chinese from "../assets/GalleryPage/Chines Theme.jpg";
import birthday from "../assets/GalleryPage/Birthday Theme.jpg";

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="La Couture Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button
          className="consultation-button"
          onClick={() => (window.location.href = "/contact")}
        >
          Book a Consultation
        </button>
      </header>

      <main className="main-content">
        <section className="client-testimonials">
          <h1>What Our Clients Say</h1>
          <div className="testimonials-grid">
            <div className="testimonial">
              <img src={birthday} alt="Birthday Theme party" />
              <p>Conceptual & Codirected by: La Couture</p>
              <h2>Birthday Theme Party</h2>
              <p>
                Bring your birthday dream to life with creative and personalized
                party setups. Whether it's a whimsical garden, a glamorous
                soirée, or a gala-like black-tie event, every detail is designed
                to make your celebration fun, vibrant, and uniquely yours!
              </p>
              <a href="#birthday-theme-details">Read more</a>
            </div>
            <div className="testimonial">
              <img src={khmer} alt="Khmer Theme Wedding" />
              <p>Conceptual & Codirected by: La Couture</p>
              <h2>Khmer Theme Wedding</h2>
              <p>
                Celebrate the beauty of Khmer tradition with exquisite designs
                inspired by Cambodian culture. From intricate golden motifs to
                traditional arrangements, these celebrations are opulent and
                bespoke, creating a truly majestic setting for your special day.
              </p>
              <a href="#khmer-theme-details">Read more</a>
            </div>
            <div className="testimonial">
              <img src={chinese} alt="Chinese Theme Wedding" />
              <p>Conceptual & Codirected by: La Couture</p>
              <h2>Chinese Theme Wedding</h2>
              <p>
                Immerse yourself in the timeless elegance of a Chinese-inspired
                wedding. With auspicious red and gold tones, symbol-laden decor,
                and refined details, this theme embodies honor, prosperity, and
                love for an unforgettable celebration.
              </p>
              <a href="#chinese-theme-details">Read more</a>
            </div>
          </div>
        </section>

        {/* New Section for Khmer Theme Wedding */}
        <section id="khmer-theme-details" className="khmer-theme-details">
          <div className="testimonial-detail1">
            <img src={khmer} alt="Khmer Theme Wedding" />
            <div className="text-content">
              <h2>Khmer Theme Wedding</h2>
              <p>
                “ We couldn't be happier with the exceptional service provided
                by
                <strong> La Couture Phnom Penh</strong> for our wedding
                reception. From concept to design and installation, every detail
                was meticulously planned and executed to perfection. The blend
                of elegance and creativity exceeded our expectations, leaving
                our guests in awe. Thank you for making our special day truly
                unforgettable! ”
              </p>
              <p>
                <strong>- Ratha and Kanha -</strong>
              </p>
              <button
                className="contact-button"
                onClick={() => (window.location.href = "/contact")}
              >
                Book Your Experience Today
              </button>
            </div>
          </div>
        </section>

        <section id="chinese-theme-details" className="chinese-theme-details">
          <div className="testimonial-detail1">
            <img src={chinese} alt="Chinese Theme Wedding" />
            <div className="text-content">
              <h2>Chinese Theme Wedding</h2>
              <p>
                “ We are beyond grateful to{" "}
                <strong>La Couture Phnom Penh</strong> for making our wedding
                day so magical. The Chinese-themed décor was absolutely
                stunning, with every detail thoughtfully crafted to reflect
                tradition and elegance. Our guests couldn’t stop praising the
                atmosphere and beauty of the event. Thank you for turning our
                vision into a reality and making our special day truly
                unforgettable!”
              </p>
              <p>
                <strong>- Jimmy and Jusmin -</strong>
              </p>
              <button
                className="contact-button"
                onClick={() => (window.location.href = "/contact")}
              >
                Book Your Experience Today
              </button>
            </div>
          </div>
        </section>

        <section id="birthday-theme-details" className="birthday-theme-details">
          <div className="testimonial-detail1">
            <img src={birthday} alt="Khmer Theme Wedding" />
            <div className="text-content">
              <h2>Birthday theme party</h2>
              <p>
                “ <strong>La Couture Phnom Penh</strong> did an incredible job
                bringing our birthday party theme to life! From the vibrant
                decorations, every detail was perfect. The attention to our
                chosen theme made the celebration feel so personal and unique,
                and our guests couldn’t stop raving about how stunning
                everything looked. Thank you for creating such a memorable and
                joyful experience—we couldn’t have asked for more! ”
              </p>
              <p>
                <strong>- Suwin -</strong>
              </p>
              <button
                className="contact-button"
                onClick={() => (window.location.href = "/contact")}
              >
                Book Your Experience Today
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TestimonialsPage;
