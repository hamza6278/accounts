import React from 'react';
import './Services.css';
import Header from '../components/header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

const Services = () => {

   const navigate = useNavigate(); 
  return (
    <div className="services-page">
      <Header />
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1 style={{ fontSize: '3.7rem', margin: 0, textAlign: 'center',textTransform: 'none' }}>Our Services</h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-container">
        <div className="container">
          {/* Web Design Service */}
          <div className="service-item">
            <div className="service-image">
              <img src="https://images.pexels.com/photos/7111545/pexels-photo-7111545.jpeg" alt="Mountain landscape" />
            </div>
            <div className="service-content">
              <h2>Bookkeiping</h2>
              <p>Our bookkeeping service offers reliable, timely, and accurate back-office support for UK accounting firms. Every transaction is recorded correctly, keeping your financial records organised, compliant, 
                and audit-ready, so you can save time and focus on client growth.</p>
              <p>
              </p>
              {/* <button className="start-project-btn">Start a Project</button> */}
            
          <button
          className="start-project-btn"
          onClick={() => navigate("/contact")}
        >
          Start a Project
        </button>
            </div>
          </div>

          {/* Graphic Design Service */}
          <div className="service-item">
            <div className="service-image">
              <img src="https://images.pexels.com/photos/7821546/pexels-photo-7821546.jpeg" alt="Valley landscape" />
            </div>
            <div className="service-content">
              <h2>Quarterly VAT Submissions</h2>
              <p>We prepare and file HMRC-compliant VAT returns on time, every quarter. Our outsourced accounting support ensures 
                accuracy, reduces errors, and keeps your firm fully compliant without the stress of last-minute deadlines.</p>
              <p>
                
              </p>
              {/* <div className="price">From $99</div> */}
              {/* <button className="start-project-btn">Start a Project</button> */}
            
          <button
          className="start-project-btn"
          onClick={() => navigate("/contact")}
        >
          Start a Project
        </button>
            
            </div>
          </div>

          {/* SEO Services */}
          <div className="service-item">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lake landscape" />
            </div>
            <div className="service-content">
              <h2>Annual Accounts</h2>
              <p>We deliver precise and compliant annual accounts for UK accounting firms. Our back-office support handles all year-end reporting, ensuring your clients’ 
                records are accurate, audit-ready, and submitted on time.</p>
              <p></p>
              {/* <div className="price">From $149</div> */}
              {/* <button className="start-project-btn">Start a Project</button> */}

          <button
          className="start-project-btn"
          onClick={() => navigate("/contact")}
        >
          Start a Project
        </button>

            </div>
          </div>

             {/* Graphic Design Service */}
          <div className="service-item">
            <div className="service-image">
              <img src="https://images.pexels.com/photos/7947637/pexels-photo-7947637.jpeg" alt="Valley landscape" />
            </div>
            <div className="service-content">
              <h2>Year‑End Working Notes </h2>
              <p>Comprehensive, well-organised working papers designed to streamline audits, enhance accuracy, and ensure compliance. These notes provide clear documentation, supporting efficient year-end procedures, 
                reducing errors, and enabling smooth collaboration between auditors and management</p>
              <p>
                
              </p>
              {/* <div className="price">From $99</div> */}
                         <button
          className="start-project-btn"
          onClick={() => navigate("/contact")}
        >
          Start a Project
        </button>
            </div>
          </div>

           {/* Graphic Design Service */}
          <div className="service-item">
            <div className="service-image">
              <img src="https://images.pexels.com/photos/6863176/pexels-photo-6863176.jpeg" alt="Valley landscape" />
            </div>
            <div className="service-content">
              <h2>Self-Assessments</h2>
              <p>End-to-end preparation and accurate submission of UK self-assessment tax returns, ensuring full compliance with HMRC requirements. Our service removes the stress of deadlines and complexities, offering individuals 
                peace of mind, timely filing, and expert guidance throughout the process..</p>
              <p>
                
              </p>
              {/* <div className="price">From $99</div> */}
                      <button
          className="start-project-btn"
          onClick={() => navigate("/contact")}
        >
          Start a Project
        </button>

            </div>
          </div>

        </div>
      </section>


{/* Why Love Nature Section */}
<section className="why-love-nature">
  <div className="container">
    <div className="why-content">
      <h2>Why Finara?</h2>
      <p>Choosing the right outsourcing partner matters. At Finara, we make it simple: <br/>
      <br />
      •	Built for UK Accountants – We understand compliance, accuracy, and deadlines.
      <br />
      •	Cost-Effective & Scalable – Pay only for the support you need, when you need it. 
      <br/>
      •	Personal & Reliable, We're two accountants who know your challenges, & we've got your back(office).  
      
       </p> 
      <p> 👉 Let us handle the heavy lifting so you can focus on growing your firm.</p>
    </div>
    <div className="badges-container">
      <div className="badge">
        <div className="badge-icon">
          <i className="fas fa-trophy"></i>
        </div>
        <p>3 Years Experience</p>
      </div>
      <div className="badge">
        <div className="badge-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
          </svg>
        </div>
        <p>5 Star Rating</p>
      </div>
      <div className="badge">
        <div className="badge-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
            <path d="M21 3v5h-5"/>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
            <path d="M8 16H3v5"/>
          </svg>
        </div>
        <p>Quick Turnaround</p>
      </div>
      <div className="badge">
        <div className="badge-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 12l2 2 4-4"/>
            <circle cx="12" cy="12" r="9"/>
          </svg>
        </div>
        <p>Dedicated Support</p>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
};

export default Services;