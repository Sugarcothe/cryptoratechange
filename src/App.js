import "./App.css";
import React from "react";

function App() {
  // Static exchange rates data
  const exchangeRates = [
    { currency: "USDT", weBuy: "1474", weSell: "1507" },
    { currency: "BTC", weBuy: "1472", weSell: "1505" },
    { currency: "EURO", weBuy: "1711", weSell: "1765" },
    { currency: "GBP", weBuy: "1950", weSell: "2005" },
    { currency: "TL", weBuy: "33.5", weSell: "36.5" },
    { currency: "USD", weBuy: "1460", weSell: "1505" }
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <img src="assets/crypoko.png" alt="Cryptopoko Logo" />
          <h1 className="logo-header">CRYPTOPOKO</h1>
          <p className="subtitle">
            Your trusted cryptocurrency and fiat exchange partners.
          </p>
          <h3 className="date">
            <span className="date-icon">📅</span>
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </h3>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>CURRENCY</th>
                <th>WE BUY</th>
                <th>WE SELL</th>
              </tr>
            </thead>
            <tbody>
              {exchangeRates.map((rate, index) => (
                <tr key={index}>
                  <td>{rate.currency}</td>
                  <td>${rate.weBuy}</td>
                  <td>${rate.weSell}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Github credentials */}
        </div>
      </div>
      <footer className="footer">
        <h2>Daily rates are not static, they can be modified</h2>
        <h4>
          <span>Tel:</span> +2348161716858
        </h4>
        <div className="app-section">
          <div className="app-item">
            <img src="Noctarwallet.png" alt="Noctarwallet" className="app-logo" />
            <p>Download and use <strong>Noctarwallet</strong> for all crypto trading</p>
            <div className="store-buttons">
              <a href="https://play.google.com/store" className="store-btn">Google Play</a>
              <a href="https://apps.apple.com" className="store-btn">App Store</a>
            </div>
          </div>
          <div className="app-item">
            <img src="Pokowave.png" alt="Pokowave" className="app-logo" />
            <p>Download and use <strong>Pokowave</strong> for Bill payment</p>
            <div className="store-buttons">
              <a href="https://play.google.com/store" className="store-btn">Google Play</a>
              <a href="https://apps.apple.com" className="store-btn">App Store</a>
            </div>
          </div>
        </div>
        {/* <div className="links">
          <a href="https://instagram.com/cryptopoko" className="social-link">
            📷
          </a>
          <a href="https://facebook.com/cryptopoko" className="social-link">
            📘
          </a>
          <a href="https://twitter.com/cryptopoko" className="social-link">
            🐦
          </a>
        </div> */}
      </footer>
    </div>
  );
}

export default App;
