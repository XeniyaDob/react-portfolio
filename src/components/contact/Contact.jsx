import React from "react";
import "./Contact.css";
import { BsLinkedin } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <h4>Linkedin</h4>
            <a
              href="https://www.linkedin.com/in/xeniya-dobrogorskaya/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="contact_option-icon" />
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
