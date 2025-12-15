import "./App.css";
import React, { useState, useEffect } from "react";
import useContentful from "./useContentful";

function App() {
  const [post, setPost] = useState([]);
  const { getPost } = useContentful();

  useEffect(() => {
    // Mock data since Contentful is blocked
    const mockData = [
      { currency: "Bitcoin (BTC)", weBuy: "$42,500", weSell: "$43,000" },
      { currency: "Ethereum (ETH)", weBuy: "$2,800", weSell: "$2,850" },
      { currency: "USDT", weBuy: "₦1,580", weSell: "₦1,600" }
    ];
    setPost(mockData);
    
    // Uncomment when Contentful is working:
    // getPost().then((response) => setPost(response || []));
  }, []);

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
              {post &&
                post.map((post, index) => (
                  <tr key={index}>
                    <td>{post.currency}</td>
                    <td>{post.weBuy}</td>
                    <td>{post.weSell}</td>
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
              <a href="https://play.google.com/store/apps/details?id=com.noctardev.noctarwallet&hl=en" className="store-btn">Google Play</a>
              <a href="https://apps.apple.com/us/app/noctar-wallet/id6752936301" className="store-btn">App Store</a>
            </div>
          </div>
          <div className="app-item">
            <img src="Pokowave.png" alt="Pokowave" className="app-logo" />
            <p>Download and use <strong>Pokowave</strong> for Bill payment</p>
            <div className="store-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.pokowavedev.pokowavemobileapp&hl=en" className="store-btn">Google Play</a>
              <a href="https://apps.apple.com/us/app/pokowave/id6741422852" className="store-btn">App Store</a>
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
