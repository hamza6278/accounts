import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom"; 
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); 
  return (
    <div className="home-container">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h2 className="hero-title">
              Streamline Your Firm with </h2> <h1><br />
              <span className="hero-nature">Back-Office Support</span>
            </h1>
            <p className="hero-subtitle">
              We handle the back-office work so you can focus on clients and growth
            </p>
<button 
  className="cta-button"
  onClick={() => navigate("/contact")}
>
  Get Started
</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Servicesss</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image service-image-1"></div>
              <h3 className="service-title">Bookkeeping</h3>
              <p className="service-description">
                Stay stress-free with accurate, up-to-date records. We keep your books in order so you can focus on clients, not corrections.
              </p>
            </div>
            <div className="service-card">
              <div className="service-image service-image-2"></div>
              <h3 className="service-title">Quarterly VAT Submissions</h3>
              <p className="service-description">
                No more VAT deadline panic. We prepare accurate, HMRC-compliant quarterly returns—on time, every time.
              </p>
            </div>
            <div className="service-card">
              <div className="service-image service-image-3"></div>
              <h3 className="service-title">Annual Accounts</h3>
              <p className="service-description">
                End the year with confidence. We deliver precise, compliant accounts along with working notes 
                — so you can focus on growing relationships, not paperwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-content">
            <div className="quote-icon">"</div>
            <blockquote className="testimonial-text">
              "Partnering with Finara has transformed our workflow and let us focus on strategic client work. They’re reliable, detail‑oriented, 
              and absolutely trustworthy.”<p></p> — Jane Miller, Chartered Accountant"
            </blockquote>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <p className="author-name">Jane Miller</p>
            </div>
          </div>
        </div>
       
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <p className="about-label">ABOUT US</p>
              <h2 className="about-title">
                Who We Are.
              </h2>
              <p className="about-description">
                At TheFinara, we’re finance professionals dedicated to supporting UK accounting firms. 
                We handle the back-office work — so you can focus on clients and growth.
              </p>
              {/* <button className="find-out-button">Show Me How</button> */}
            </div>
            <div className="about-image">
              <div className="fern-image"></div>
            </div>
          </div>
        </div>
        {/* <button className="customize-btn about-customize"> */}
          {/* ⚙️ Customize */}
        {/* </button> */}
      </section>

      {/* Questions Section */}
      <section className="questions-section">
        <div className="questions-overlay">
          <div className="questions-content">
            <h2 className="questions-title">QUESTIONS?</h2>
            <p className="questions-subtitle">
              Big or small, one-off or ongoing  <br />
              we’re here to be your back-office partner.
            </p>
            <button 
  className="lets-talk-button"
  onClick={() => navigate("/contact")}
>
  Let's Talk Now
</button>
          </div>
        </div>
        {/* <button className="customize-btn questions-customize"> */}
          {/* ⚙️ Customize */}
        {/* </button> */}
      </section>

      <Footer />
    </div>
  );
};

export default Home;