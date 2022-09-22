import './App.css';

function App() {
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
              <h3>Currency</h3>
            </div>
            <div className='line-1'>
              <h3>WE BUY</h3>
            </div>
            <div className='line-1'>
              <h3>WE SELL</h3>
            </div>
          </div>
          <hr className="header-hr"/>
            
          <div className='table-card'>
            <div className='line-1'>
              {/* <img src="img/bit.png" alt=''/> */}
              <h3>Bitcoin</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>75.69</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>78.67</h3>
            </div>
          </div>
          <hr/>
          <div className='table-card'>
            <div className='line-1'>
              {/* <img src="img/bit.png" alt=''/> */}
              <h3>Etherum</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>75.69</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>78.67</h3>
            </div>
          </div>
          <hr/>
          <div className='table-card'>
            <div className='line-1'>
              {/* <img src="img/bit.png" alt=''/> */}
              <h3>Giftcard</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>75.69</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>78.67</h3>
            </div>
          </div>
          <hr/>

          
        </div>
      </div>
      <footer className='footer'>
        <h2>We are fast and reliable</h2>
        <h4><span>Tel:</span>905488218164, +2349134060609</h4>
        <div className='links'>
          <a target='_blank' href=''></a>
        </div>
      </footer>
    </div>
    
  );
}

export default App;
