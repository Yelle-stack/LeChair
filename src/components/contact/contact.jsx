import React from 'react';
import "./contact.css";

const contact = () => {
  return (
    <div>
      <section className="contact container" id="contact">
        <div className="contact-data">
            <h2 className="heading">
                Get started with <span className="gradient-text">LeChair</span>
            </h2>
            <p>Subscribe to get exclusive offers 
                <br /> and enjoy comfort at the best prices.</p>
            <a href="#" className="btn">
                Get Started
            </a>
        </div>
      </section>
    </div>
  );
};

export default contact;
