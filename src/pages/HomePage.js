// App.js
import React from "react";
import "./HomePage.css";
import logo from "../assets/GalleryPage/logo.png";
const Home = () => {
  return (
    <div className="home">
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

      <main className="homepage">
        <section className="hero">
          <div className="hero-content">
            <h1>La Couture Always Brings You the Next Level Wedding</h1>
            <button
              className="hero-button"
              onClick={() => (window.location.href = "/gallery")}
            >
              View Our Gallery
            </button>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-section address">
            <h3>Address</h3>
            <p>"St.123 Sen Sok, Phnom Penh, Cambodia."</p>
            <p>
              <strong>Opening hours:</strong> Sun-Mon: 10am - 10pm
            </p>
          </div>

          <div className="footer-section slogan">
            <h3>La Couture</h3>
            <p>
              "Where Timeless Elegance Meets Modern Creativity, Turning Your
              Most Cherished Dreams into Unforgettable Realities."
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/lacouturephnompenh">
                <img src="/assets/facebook.png" alt="Facebook" />
              </a>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Flacouture_wedding%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR22wCXQ4YU7apIoyqUj-iLwG1k29n3V1HlTJgx-Z6NSoyLqp3ff5DZoRIs_aem_6aKaxMOMCG6HVGYonpUGVA&h=AT1AmWI6em9EeYloYntJcXCMYEGsS3opuXcAsbf61BKlsWpJ8MGmbhmTuDe5eufP67YCmYhicDhzsOzV3l7ufFG56GV6xV0yxf1yamf7KeKCbWbxs8oIKq3ycos-gTPt_yqd">
                <img src="/assets/instagram.png" alt="Instagram" />
              </a>
              <a href="#">
                <img src="/assets/twitter.png" alt="Twitter" />
              </a>
              <a href="#">
                <img src="/assets/youtube.png" alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="footer-section contact">
            <h3>Have Questions?</h3>
            <p>Phone: +855-123-456-789</p>
          </div>

          <div className="footer-bottom">
            &copy; 2024 All rights reserved by the Incubation Center of Kirirom
            Institute of Technology.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
