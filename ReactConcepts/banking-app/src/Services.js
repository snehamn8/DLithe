import React from "react";

const Services = ({ navigateTo }) => {
  return (
    <div className="services-container">
      <h2>🌟 Our Banking Services</h2>
      <p>Choose from a variety of banking services to suit your needs.</p>
      
      <ul className="services-list">
        <li>
          <h3>Online Banking</h3>
          <p>Access your account anytime, anywhere.</p>
          <button className="primary-btn" onClick={() => navigateTo("operations")}>Proceed</button>
        </li>
        
        <li>
          <h3>Loans & Investments</h3>
          <p>Get financial support and grow your wealth.</p>
          <button className="primary-btn" onClick={() => navigateTo("operations")}>Proceed</button>
        </li>
        
        <li>
          <h3>Customer Support</h3>
          <p>We're here to assist you with any queries.</p>
          <button className="primary-btn" onClick={() => navigateTo("operations")}>Proceed</button>
        </li>

        <li>
          <h3>Bill Payments</h3>
          <p>Pay your bills securely and conveniently.</p>
          <button className="primary-btn" onClick={() => navigateTo("operations")}>Proceed</button>
        </li>

        <li>
          <h3>Credit & Debit Cards</h3>
          <p>Manage your cards and transactions with ease.</p>
          <button className="primary-btn" onClick={() => navigateTo("operations")}>Proceed</button>
        </li>
      </ul>
    </div>
  );
};

export default Services;
