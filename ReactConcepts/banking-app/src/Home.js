import React from "react";

const Home = ({ navigateTo }) => {
  return (
    <div className="home-container">
      <h1>🏦 Welcome to MyBank</h1>
      <p>Your trusted financial partner.</p>
      <p>We offer secure and reliable banking services tailored to your needs.</p>

      <div className="features">
        <h2>🌟 Why Choose Us?</h2>
        <ul>
          <li>✅ 24/7 Online Banking</li>
          <li>✅ Secure Transactions</li>
          <li>✅ Quick Loan Approvals</li>
          <li>✅ No Hidden Charges</li>
          <li>✅ Personalized Financial Advice</li>
        </ul>
      </div>

      <div className="home-buttons">
        <button className="primary-btn" onClick={() => navigateTo("registration")}>
          Register Now
        </button>
        <button className="secondary-btn" onClick={() => navigateTo("services")}>
          View Services
        </button>
      </div>
    </div>
  );
};

export default Home;
