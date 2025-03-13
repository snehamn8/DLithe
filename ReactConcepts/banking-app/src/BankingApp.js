import React, { useState } from "react";
//import './index.css';
import Home from "./Home";
import Registration from "./Registration";
import Services from "./Services";
import Operations from "./Operations";
import Success from "./Success";

const BankingApp = () => {
  const [page, setPage] = useState("home");

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div>
      <h1 className="bank-name">Fortune Bank</h1>
      <nav>
        <button onClick={() => navigateTo("home")}>Home</button>
        <button onClick={() => navigateTo("registration")}>Register</button>
        <button onClick={() => navigateTo("services")}>Services</button>
      </nav>

      {/* Page Rendering */}
      {page === "home" && <Home navigateTo={navigateTo} />}
      {page === "registration" && <Registration navigateTo={navigateTo} />}
      {page === "services" && <Services navigateTo={navigateTo} />}
      {page === "operations" && <Operations navigateTo={navigateTo} />}
      {page === "success" && <Success navigateTo={navigateTo} />}
    </div>
  );
};

export default BankingApp;
