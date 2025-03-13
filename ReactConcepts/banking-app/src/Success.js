import React from "react";

const Success = ({ navigateTo }) => {
  return (
    <div className="success-container">
      <h2>🎉 Registration Successful!</h2>
      <p>Thank you for registering with MyBank. Your account is now set up and ready to use.</p>
      <p>You can now explore our services, manage your transactions, and enjoy seamless banking.</p>
      <button className="primary-btn" onClick={() => navigateTo("services")}>Explore Services</button>
      <button className="secondary-btn" onClick={() => navigateTo("home")}>Back to Home</button>
    </div>
  );
};

export default Success;
