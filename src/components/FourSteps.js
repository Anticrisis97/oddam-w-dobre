import decoration from "../assets/Decoration.svg";
import shirt from "../assets/Icon-1.svg";
import bag from "../assets/Icon-2.svg";
import magnifyingglass from "../assets/Icon-3.svg";
import processicon from "../assets/Icon-4.svg";
import React from "react";

function FourSteps () {
    return (
        <div className="_4_steps_container">
    <p className="upper_headline">Wystarczą 4 proste kroki</p>
    <img src={decoration} alt="decoration"></img>
    <div className="_4_steps_grey_area">
        <div className="_4_steps_grey_area_subcontainer">
            <img src={shirt} alt='shirt photo'></img>
            <p>Wybierz rzeczy</p>
            <hr></hr>
            <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="_4_steps_grey_area_subcontainer">
            <img src={bag} alt='bag'></img>
            <p>Spakuj je</p>
            <hr></hr>
            <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className="_4_steps_grey_area_subcontainer">
            <img src={magnifyingglass} alt='magnifying glass'></img>
            <p>Zdecyduj komu chcesz pomóc</p>
            <hr></hr>
            <p className="untraceable_margin">wybierz zaufane miejsce</p>
        </div>
        <div className="_4_steps_grey_area_subcontainer">
            <img src={processicon} alt="process icon"></img>
            <p>Zamów kuriera</p>
            <hr></hr>
            <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
    </div>
    <div className="_4_steps_subbutton_container"><p className="_4_steps_subbutton">ODDAJ RZECZY</p></div>
</div>
    )
}

export default FourSteps