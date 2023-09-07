import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Zaloguj from './components/Zaloguj'
import ZalozKonto from "./components/ZalozKonto";
import './css/main.css'

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
                  <Link to="/zalozkonto">Załóż konto</Link>
              </li>
          </ul>
          <ul className="main_menu">
              <li>
                  <Link to="/">Start</Link>
              </li>
              <li>O co chodzi?</li>
              <li>O nas</li>
              <li>Fundacja i organizacje</li>
              <li>Kontakt</li>
          </ul>
          <div className="top_pic">
          <img src="./assets/topbgc.png" alt="pudło z antykami"></img>
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
