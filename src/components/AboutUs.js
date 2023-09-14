import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";
import people from "../assets/People.jpg";
import React from "react";

function AboutUs () {
    return (
        <div className="about_us_container">
        <div className="about_us_text_container">
            <p>O nas</p>
            <img src={decoration} alt="decoration"></img>
            <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            <div>
                <img className='signature' src={signature} alt='signature'></img>
            </div>
        </div>
        <div className="about_us_pic_container">
            <img src={people} alt='People'></img>
        </div>
    </div>
    )
}

export default AboutUs