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
          <p className="subtitle">Your Trusted Crypto Exchange Partner</p>
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
          <span>Tel:</span> 08161716858
        </h4>
        <div className="links">
          <p>
            <span>INSTAGRAM: </span>@cryptopoko
          </p>
          <p>
            <span>FACEBOOK: </span>@cryptopoko
          </p>
          <p>
            <span>TWITTER: </span>@cryptopoko
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
