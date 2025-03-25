import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-heading">Get in Touch</h1>

      <form className="contact-form">
        <div className="contact-input-group">
          <input type="text" name="name" placeholder="Your Name" className="contact-input" />
          <input type="text" name="surname" placeholder="Your Surname" className="contact-input" />
          <input type="email" name="email" placeholder="Your Email" className="contact-input" />
        </div>

        <textarea name="message" placeholder="Your Message" className="contact-textarea"></textarea>

        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;