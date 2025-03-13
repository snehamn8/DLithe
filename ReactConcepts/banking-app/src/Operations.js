import React, { useState } from "react";

const Operations = ({ navigateTo }) => {
  const [balance, setBalance] = useState(5000);
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Deposit", amount: 2000 },
    { id: 2, type: "Withdrawal", amount: 1000 },
  ]);

  const handleTransaction = (type, amount) => {
    if (type === "Withdraw" && amount > balance) {
      alert("Insufficient balance!");
      return;
    }
    const newBalance = type === "Deposit" ? balance + amount : balance - amount;
    setBalance(newBalance);
    setTransactions([...transactions, { id: transactions.length + 1, type, amount }]);
  };

  return (
    <div className="operations-container">
      <h2>🏦 Banking Operations</h2>
      <p>Manage your account and transactions securely.</p>
      
      <h3>💰 Current Balance: ${balance}</h3>
      
      <div className="operations-list">
        <button onClick={() => alert(`Your Balance: $${balance}`)}>💰 Check Balance</button>
        <button onClick={() => handleTransaction("Deposit", 1000)}>💵 Deposit $1000</button>
        <button onClick={() => handleTransaction("Withdraw", 500)}>💳 Withdraw $500</button>
        <button onClick={() => alert("Viewing Transaction History...")}>📜 Transaction History</button>
        <button onClick={() => alert("Bill Payments...")}>🧾 Pay Bills</button>
        <button onClick={() => alert("Applying for Loan...")}>🏠 Apply for Loan</button>
      </div>
      
      <h3>📜 Recent Transactions</h3>
      <ul>
        {transactions.map((txn) => (
          <li key={txn.id}>{txn.type}: ${txn.amount}</li>
        ))}
      </ul>

      <button className="complete-btn" onClick={() => navigateTo("success")}>✅ Complete</button>
    </div>
  );
};

export default Operations;
