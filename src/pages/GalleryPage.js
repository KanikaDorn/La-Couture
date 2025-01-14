import React, { useState } from "react";
import "./GalleryPage.css";

import logo from "../assets/GalleryPage/logo.png";
import img1 from "../assets/GalleryPage/Gallery Item 1.jpg";
import img2 from "../assets/GalleryPage/Gallery Item 2.jpg";
import img3 from "../assets/GalleryPage/Gallery Item 3.jpg";
import img4 from "../assets/GalleryPage/Gallery Item 4.jpg";
import img5 from "../assets/GalleryPage/Gallery Item 5.jpg";
import img6 from "../assets/GalleryPage/Gallery Item 6.jpg";
import img7 from "../assets/GalleryPage/Gallery Item 7.jpg";
import img8 from "../assets/GalleryPage/Gallery Item 8.jpg";
import img9 from "../assets/GalleryPage/Gallery Item 9.jpg";

// Data for each gallery item
const galleryItems = [
  {
    image: img1,
    title: "Luxury Floral Elegance",
    description:
      "This stage combines opulence with romance, featuring a grand display of blush and red florals cascading across the background. Soft golden lighting highlights the intricate floral arrangements, while crystal chandeliers dangle elegantly from above, creating a timeless and sophisticated atmosphere. Perfect for couples looking for a blend of glamour and romance.",
    additionalImages: [img1, img2, img3],
  },
  {
    image: img2,
    title: "Grand Floral Arch",
    description:
      "The focal point of this design is a massive floral arch composed of vibrant pink and red flowers. The stage's layout is spacious, with flower arrangements framing the entrance and aisle, creating a dramatic and grand ambiance. This setup is ideal for couples who want a regal and photogenic wedding.",
    additionalImages: [img2, img3, img4],
  },
  {
    image: img3,
    title: "Luxury Floral Elegance",
    description:
      "This stage combines opulence with romance, featuring a grand display of blush and red florals cascading across the background. Soft golden lighting highlights the intricate floral arrangements, while crystal chandeliers dangle elegantly from above, creating a timeless and sophisticated atmosphere. Perfect for couples looking for a blend of glamour and romance.",
    additionalImages: [img3, img4, img5],
  },
  {
    image: img4,
    title: "Golden Royal Theme",
    description:
      "This design radiates a regal aura with its use of golden tones, ornate arches, and sparkling chandeliers. Rows of cascading flowers in subtle hues add a soft contrast to the richness of the gold. This stage is perfect for those wanting a traditional yet majestic Khmer-inspired setup, complete with an air of sophistication.",
    additionalImages: [img4, img5, img6],
  },
  {
    image: img5,
    title: "Modern Green Arch",
    description:
      "A minimalist and modern take on wedding stages, featuring a striking green arch covered with lush foliage and subtle floral accents. The use of greenery gives the design a refreshing and contemporary appeal, making it perfect for outdoor or semi-formal weddings.",
    additionalImages: [img5, img6, img7],
  },
  {
    image: img6,
    title: "Enchanted Garden",
    description:
      "A whimsical and nature-inspired stage featuring lush greenery and golden bird ornaments hanging from the ceiling. The white aisle resembles a fairytale walkway, leading to an altar surrounded by trees and natural elements. This design is ideal for couples who love a magical, storybook-like setting for their special day.",
    additionalImages: [img6, img7, img8],
  },
  {
    image: img7,
    title: "Classic Khmer Elegance",
    description:
      "This stage highlights the beauty of Khmer cultural aesthetics with intricate patterns and motifs in deep gold tones. It is adorned with elaborate floral arrangements and ornate detailing, providing a luxurious yet traditional atmosphere. Ideal for couples who want to celebrate their heritage while maintaining an opulent vibe.",
    additionalImages: [img7, img8, img9],
  },
  {
    image: img8,
    title: "Magical Forest Theme",
    description:
      "A mystical and enchanting stage inspired by forest elements. It features a canopy of trees, soft mood lighting, and hanging globe lights that resemble glowing orbs. This setup creates a serene and magical environment, making it ideal for evening weddings with a nature-loving theme.",
    additionalImages: [img7, img8, img9],
  },
  {
    image: img9,
    title: "Red Floral Symphony",
    description:
      "This bold and vibrant stage stands out with its rich red florals and symmetrical design. The backdrop is adorned with intricate patterns and arches, making it a striking centerpiece. This setup is perfect for couples who love dramatic and festive celebrations, emphasizing passion and love.",
    additionalImages: [img9, img1, img2],
  },
];

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleGoBack = () => {
    setSelectedItem(null);
  };

  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="gallery-page">
      {/* Header Component */}
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

      {/* Main Content */}
      <main>
        {!selectedItem ? (
          <>
            {/* Gallery Section */}
            <h1 className="gallery-title">Our Stunning Portfolio</h1>
            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <div
                  className="gallery-item"
                  key={index}
                  onClick={() => handleViewDetails(item)}
                >
                  <img src={item.image} alt={item.title} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Details Section */}
            <div className="details-section">
              <div className="details-images">
                {selectedItem.additionalImages.map((image, index) => (
                  <img key={index} src={image} alt={selectedItem.title} />
                ))}
              </div>
              <div className="details-description">
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
                <button className="go-back-button" onClick={handleGoBack}>
                  ← Go Back
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default GalleryPage;
