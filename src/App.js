import React, {useState, useEffect} from 'react'
import currencies from './cryptopoko-backend/schemas/currencies';
import './App.css';
import sanityClient from './client.js'

function App() {
  const [postData, setPost] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "currencies"] {
        name,
        title,
        fields {
          name,
          title,
          type
        }
      }`
      ).then((data) => setPost(data))
      .catch(console.error)
  }, [])


  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <img src='assets/crypoko.png' alt='crypto'/>
          <h2 className='logo-header'>CRYPTOPOKO</h2>
        </div>
        <div className='table'>
          <div className='table-head'>
            <div className='line-1'>
              {/* <img src="img/bit.png" alt=''/> */}
              <h3>CURRENCIES</h3>
            </div>
            <div className='line-1'>
              <h3>WE BUY</h3>
            </div>
            <div className='line-1'>
              <h3>WE SELL</h3>
            </div>
          </div>
          <hr className="header-hr"/>
            {postData && postData.map((currencies, index) => (
              <div className='table-card'>
                <div className='line-1'>
                  {/* <img src="img/bit.png" alt=''/> */}
                  <h3>{}</h3>
                </div>
                <div className='line-1'>
                  <h3><span>$</span>{currencies.fields.buy}</h3>
                </div>
                <div className='line-1'>
                  <h3><span>$</span>{currencies.fields.sell}</h3>
                </div>
           </div>
            ))
}
         
          <hr/>
         
        </div>
      </div>
      <footer className='footer'>
        <h2>We are fast and reliable</h2>
        <h4><span>Tel:</span>+905488218164, +2349134060609</h4>
        <div className='links'>
          <p><span>INSTAGRAM: </span>@cryptopoko</p>
          <p><span>FACEBOOK: </span>@cryptopoko</p>
          <p><span>TWITTER: </span>@cryptopoko</p>
        </div>
      </footer>
    </div>
    
  );
}

export default App;
