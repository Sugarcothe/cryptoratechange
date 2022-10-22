import "./App.css";
import React, { useState, useEffect } from "react";
import useContentful from "./useContentful";

function App() {
  const [post, setPost] = useState([]);
  const { getPost } = useContentful();

  useEffect(() => {
    getPost().then((response) => setPost(response));
  });

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <img src="assets/crypoko.png" alt="crypto" />
          <h2 className="logo-header">CRYPTOPOKO</h2>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>CURRENCY</th>
              <th>WE BUY</th>
              <th>WE SELL</th>
            </tr>
            {post.map((post, index) => (
              <tr>
                <td>{post.currency}</td>
                <td>{post.weBuy}</td>
                <td>{post.weSell}</td>
              </tr>
            ))}
          </table>

          {/* Github credentials */}
        </div>
      </div>
      <footer className="footer">
        <h2>We are fast and reliable</h2>
        <h4>
          <span>Tel:</span>+905488218164, +2349134060609
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
