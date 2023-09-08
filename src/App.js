import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Zaloguj from './components/Zaloguj'
import ZalozKonto from "./components/ZalozKonto";
import './css/main.css'
import './css/yellowstripe.css'
import './css/4stepssection.css'
import './css/aboutus.css'
import './css/whodowehelp.css'
import './css/contactform.css'

function App() {
  return (
      <div className="main_container">
      <>
      <nav>
          <ul className="login_register">
              <li>
                  <Link to="/zaloguj">Zaloguj</Link>
              </li>
              <li>
                  <Link to="/zalozkonto" className="styled_border1">Załóż konto</Link>
              </li>
          </ul>
          <ul className="main_menu">
              <li>
                  <Link to="/" className="styled_border2">Start</Link>
              </li>
              <li>O co chodzi?</li>
              <li>O nas</li>
              <li>Fundacja i organizacje</li>
              <li>Kontakt</li>
          </ul>
          <div className="top_pic">
          <img src="./assets/topbgc.png" alt="antiques_box"></img>
          </div>
          </nav>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/zaloguj" element={<Zaloguj />} />
            <Route path="/zalozkonto" element={<ZalozKonto />} />
        </Routes>
          </>
      </div>
  );
}

export default App;
