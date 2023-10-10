import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes, useLocation} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import CreateAccount from "./components/CreateAccount";
import './css/main.css'
import './css/yellowstripe.css'
import './css/4stepssection.css'
import './css/aboutus.css'
import './css/whodowehelp.css'
import './css/contactform.css'
import antiquebox from './assets/Home-Hero-Image.jpg'
import Logout from "./components/Logout";


function App() {
    const path = useLocation();
    console.log(path)
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
          <div className={path.pathname !== "/" && "top_pic"}>
          <img className="top_picc" src={antiquebox} alt="antiques_box"></img>
          </div>
          </nav>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/zaloguj" element={<Login />} />
            <Route path="/zalozkonto" element={<CreateAccount />} />
            <Route path="/wyloguj" element={<Logout /> } />
        </Routes>
          </>
      </div>
  );
}

export default App;
