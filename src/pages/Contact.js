
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/header";
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    // 🔹 Step 1: Send message to YOU
    emailjs
      .send(
        "service_s9v5mrn",      // Service ID
        "template_qnpvl6k",     // Template ID ()
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
     },
        "5QbuCQ99nb_u8vxqY"     // ✅ Public API Key
      )
      .then(
        (result) => {
          console.log("✅ Email sent to you:", result.text);

          // 🔹 Step 2: Send Auto-Reply back to user
          emailjs.send(
            "service_s9v5mrn",     // same Service ID
            "template_7xy47zw",    // ✅ Auto-reply template ID
            {
              name: formData.name,
              email: formData.email,
              message: formData.message,
            },
            "5QbuCQ99nb_u8vxqY"    // same Public Key
          );

          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
          setError({});
        },
        (error) => {
          console.error("❌ Email error:", error.text);
        }
      );
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1 style={{ fontSize: '3rem', margin: 0, textAlign: 'center',textTransform: 'none' }}>Our Contact</h1> 
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Side - Info */}
          <div className="contact-info">
            <h2>You can find us at</h2>
            <div className="info-item">
              <h4>Email</h4>
              <p>connect@thefinara.com</p>
            </div>
            <div className="info-item">
            <h4>Phone Number</h4>
            <img src={require('../assets/qr.jpeg')} alt="QR Code for Phone Number" style={{ width: '120px', height: '120px' }} />
            </div>
            <div className="info-item">
              {/* <h4>Location</h4> */}
              {/* <p>2360 Hood Avenue, San Diego, CA, 92123</p> */}
            </div>
            <div className="social-icons">
  <a href="https://www.facebook.com/share/19NeZz2yDb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
<a href="https://www.linkedin.com/company/the-finara/" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-linkedin-in"></i>
</a>
</div>

          </div>

          {/* Right Side - Form */}
          <div className="contact-form">
            <h2>Let's get in touch</h2>
            {success && <p className="success-msg">Message sent successfully ✅</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {error.name && <p className="error">{error.name}</p>}

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {error.email && <p className="error">{error.email}</p>}

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              {error.message && <p className="error">{error.message}</p>}

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;


