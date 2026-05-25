// SalonServicesSection.jsx
import React from 'react';
import './SalonServicesSection.css';

const SalonServicesSection = () => {
  return (
    <section className="salon-services-section">
      <div className="salon-services-container">
        {/* Header with badges */}
        <div className="salon-services-header">
          <div className="salon-services-badge-group">
            <span className="salon-services-badge">Home</span>
            <span className="salon-services-badge salon-services-badge-active">Institute</span>
          </div>
          
          <div className="salon-services-search">
            <svg className="salon-services-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
            </svg>
            <input 
              type="text" 
              className="salon-services-search-input" 
              placeholder="Search services" 
            />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="salon-services-main-title">
          Beauty comes first, style<br />
          follows every step.
        </h1>
        
        <p className="salon-services-description">
          Whether it's a quick touch-up or a full transformation, we're here<br />
          to bring your unique style to life.
        </p>

        {/* Recommended Section */}
        <div className="salon-services-recommended-header">
          <h2 className="salon-services-recommended-title">Recommended</h2>
          <a href="#" className="salon-services-view-all">View all →</a>
        </div>

        {/* Service Card */}
        <div className="salon-services-card">
          <div className="salon-services-card-image">
            <span className="salon-services-card-badge">2.3k+</span>
          </div>
          <div className="salon-services-card-content">
            <h3 className="salon-services-card-title">Deep Conditioning Treatments</h3>
            <p className="salon-services-card-subtitle">Because Monde du Esthetique</p>
            <div className="salon-services-card-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
              <span>Montmartre & Sacre-Coeur Basilica (1.2 km away)</span>
            </div>
            <div className="salon-services-card-rating">
              <div className="salon-services-stars">
                <span>★★★★★</span>
              </div>
              <span className="salon-services-rating-text">On Trusted Pilot</span>
              <span className="salon-services-reviews">150+ Reviews</span>
            </div>
          </div>
          <button className="salon-services-book-btn">Book Now</button>
        </div>

        {/* Lifestyle and Wellness Banner */}
        <div className="salon-services-wellness-banner">
          <span className="salon-services-wellness-icon">💆‍♀️</span>
          <span className="salon-services-wellness-text">Lifestyle and Wellness</span>
          <button className="salon-services-wellness-book">Book Now →</button>
        </div>

        {/* Service Categories */}
        <div className="salon-services-categories">
          <div className="salon-services-category">
            <div className="salon-services-category-icon">💇‍♀️</div>
            <span>Hairdressing</span>
          </div>
          <div className="salon-services-category">
            <div className="salon-services-category-icon">💆‍♀️</div>
            <span>Well Massage</span>
          </div>
          <div className="salon-services-category">
            <div className="salon-services-category-icon">👁️</div>
            <span>Eye Care</span>
          </div>
          <div className="salon-services-category">
            <div className="salon-services-category-icon">💅</div>
            <span>Nail Beauty</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalonServicesSection;