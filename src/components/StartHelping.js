import decoration from "../assets/Decoration.svg";
import React from "react";
import '../css/main.css'
function StartHelping () {
    return (
    <div className="start_helping">
        <h1>Zacznij pomagać!</h1><h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
        <img src={decoration} alt="decoration"/>
        <div className="top_buttons_container">
            <span className="top_buttons">ODDAJ RZECZY</span><span
            className="top_buttons">ZORGANIZUJ ZBIÓRKĘ</span>
        </div>
    </div>
    )
}

export default StartHelping