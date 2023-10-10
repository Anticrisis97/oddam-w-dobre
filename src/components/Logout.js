import React from 'react';
import '../css/logout.css'
import decoration from '../assets/Decoration.svg'
import {Link} from "react-router-dom";

function Logout() {
    return (
        <div className='logout_container'>
            <h1>Wylogowanie nastąpiło <p>pomyślnie!</p></h1>
            <img src={decoration} alt='decoration'></img>
            <Link to='/'><button>Strona główna</button></Link>
        </div>
    );
}

export default Logout;