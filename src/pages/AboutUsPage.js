import React from "react";
import "./AboutUsPage.css";
import logo from "../assets/GalleryPage/logo.png";
import mainImage from "../assets/GalleryPage/main.png";
import image1 from "../assets/GalleryPage/image1.jpg";
import image2 from "../assets/GalleryPage/image2.jpg";
import image3 from "../assets/GalleryPage/image3.jpg";
import image4 from "../assets/GalleryPage/image4.jpg";
import image5 from "../assets/GalleryPage/image5.jpg";
import image6 from "../assets/GalleryPage/image6.jpg";
import image7 from "../assets/GalleryPage/Khmer Theme.jpg";

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
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
          className="contact-button"
          onClick={() => (window.location.href = "/contact")}
        >
          Book a consultation
        </button>
      </header>
      <section className="hero">
        <div className="hero-content"></div>
      </section>
      <h3>About</h3>
      <h2>La Couture</h2>
      <section className="main-section">
        <img className="main-image" src={mainImage} alt="Wedding Scene" />
        <div className="content">
          <p>
            At La Couture Phnom Penh, we are passionate about creating
            unforgettable wedding experiences that celebrate love, culture, and
            individuality. As Phnom Penh’s premier wedding boutique, we
            specialize in designing bespoke wedding events that blend Khmer
            tradition with modern elegance.
          </p>
          <p>
            Founded with a vision to redefine luxury wedding aesthetics, La
            Couture has become a trusted name for couples looking to celebrate
            their special day in style. From intimate ceremonies to grand
            celebrations, we have been at the forefront of curating magical
            moments for countless weddings.
          </p>
          <button
            className="portfolio-button"
            onClick={() => (window.location.href = "/gallery")}
          >
            View Portfolio
          </button>
        </div>
      </section>
      <section className="showing">
        <img src={image1} alt="Wedding Image 7" />
        <img src={image2} alt="Wedding Image 8" />
        <img src={image3} alt="Wedding Image 9" />
        <img src={image4} alt="Wedding Image 10" />
      </section>

      <section className="gallery-section">
        <p>
          At La Couture, we believe that weddings are more than events—they are
        </p>
        <p>
          expressions of love, culture, and individuality. Our mission is to
        </p>
        <p>
          craft experiences that are as unique and unforgettable as the couples
          we serve.
        </p>
        <h2>Our Passion is Your Perfect Event</h2>
        <div className="gallery-grid">
          <img src={image1} alt="Wedding Image 1" />
          <img src={image6} alt="Wedding Image 2" />
          <img src={image3} alt="Wedding Image 3" />
          <img src={image4} alt="Wedding Image 4" />
          <img src={image7} alt="Wedding Image 5" />
          <img src={image2} alt="Wedding Image 6" />
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
