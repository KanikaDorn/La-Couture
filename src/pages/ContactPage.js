import React from "react";
import "./ContactUsPage.css";
import logo from "../assets/GalleryPage/logo.png";

const ContactPage = () => {
  return (
    <div className="contact-page">
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

      <section className="hero-contact">
        <div className="hero-content">
          <h1>We’re Here to Help You Create Unforgettable Memories</h1>
          <p>Reach out for inquiries, consultations, or bookings!</p>
        </div>
      </section>

      <section className="booking-form-section">
        <h2>Booking Now</h2>
        <form className="booking-form">
          <div>
            <label>First Name and Middle Name:</label>
            <input type="text" placeholder="e.g: Kanika" />
          </div>
          <div>
            <label>Sure Name:</label>
            <input type="text" placeholder="e.g: Dorn" />
          </div>
          <div>
            <label>Email Address:</label>
            <input type="email" placeholder="e.g: kanika.dorn22@kit.edu.kh" />
          </div>
          <div>
            <label>Phone Number:</label>
            <input type="tel" placeholder="e.g: 012 345 678 910" />
          </div>
          <div>
            <label>Nationality:</label>
            <select>
              <option value="">Select</option>
              <option value="khmer">Khmer</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label>Gender:</label>
            <select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label>Booking Date:</label>
            <input type="date" />
          </div>
          <div>
            <label>Event Type:</label>
            <input
              type="text"
              placeholder="e.g: Wedding, Birthday, Anniversary"
            />
          </div>
          <div>
            <label>Preferred Theme or Style:</label>
            <input type="text" placeholder="e.g: Khmer, Chinese, Modern" />
          </div>
          <div>
            <label>Language:</label>
            <select>
              <option value="">Select</option>
              <option value="male">Khmer</option>
              <option value="female">English</option>
              <option value="other">Thai</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit">Submit Your Booking</button>
        </form>
      </section>

      <section className="map-section">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.2006370194533!2d104.89031881479125!3d11.570963091793166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095129d4fb35e9%3A0x61e45371eae687!2sLa%20Couture%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1673130194721!5m2!1sen!2skh"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
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
            "Where Timeless Elegance Meets Modern Creativity, Turning Your Most
            Cherished Dreams into Unforgettable Realities."
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
    </div>
  );
};

export default ContactPage;
