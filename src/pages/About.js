
import React from 'react';
import './About.css';
import Header from "../components/header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about-container">
        <Header/>
        {/* Hero Section */}
        {/* About hero */}
      <section className="services-heroq">
        <div className="hero-content">
          <h1 style={{ fontSize: '2.7rem', marginTop: 30, textAlign: 'center',textTransform: 'none' }}>Your Reliable Partner in UK Accounting Support</h1>
        </div>
      </section>



      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <p className="hero-text">
           We starts TheFinara as two friends with the same passion helping accountants do less admin and more of what matters. From bookkeeping to self-assessments, we take care of the back-office 
           details so your firm can stay compliant, save time, and keep growing.
          </p>
        </div>
        
        <div className="hero-image">
          <img 
            src="https://images.pexels.com/photos/33597915/pexels-photo-33597915.jpeg" 
            alt="Mountain landscape with goat" 
            className="hero-img"
          />
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="mission-values">
        <div className="mission-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            We provide back-office support for accountants in the UK from 
            <br />
            bookkeeping and VAT submissions to annual accounts and self-
            <br />
            assessments, ensuring compliance, efficiency, and peace of mind.
          </p>
        </div>

        <div className="values-section">
          <h2 className="section-title">Our Values</h2>
          <p className="section-text">
            We prioritise accuracy, trust, and confidentiality in all our 
            <br />
            back-office support for UK accounting firms, helping you stay
            <br />
            compliant, efficient, and focused on growth.

          
     
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="testimonial-content">
          <div className="quote-mark">"<p/></div>
          <p className="testimonial-text">
            Approachable, dependable, and always in step with our needs — a real support to our practice
          </p>
          <div className="testimonial-author">
            <img 
              src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/avatar_on_about.png" 
              alt="Emily Davis" 
              className="author-avatar"
            />
            <p className="author-name">Emily Davis</p>
          </div>
        </div>
      </section>
      <Footer/>
     
    </div>
  );
};

export default About;

