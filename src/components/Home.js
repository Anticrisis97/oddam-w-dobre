import React from 'react';

function Home() {
    return (
        <div>
        <div className="start_helping">
            <h1>Zacznij pomagać!</h1><h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <img src="../assets/Decoration.png" alt="decoration"/>
            <div className="top_buttons_container">
                <span className="top_buttons">ODDAJ RZECZY</span><span className="top_buttons">ZORGANIZUJ ZBIÓRKĘ</span>
            </div>
        </div>
        <div className="yellow_stripe_container">
            <div className="yellow_stripe_subcontainer">
                <p>10</p>
                <p>ODDANYCH WORKÓW</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="yellow_stripe_subcontainer">
                <p>5</p>
                <p>WSPARTYCH ORGANIZACJI</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                    enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="yellow_stripe_subcontainer">
                <p>7</p>
                <p>ZORGANIZOWANYCH ZBIÓREK</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                    enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </div>
            <div className="_4_steps_container">
            <p className="upper_headline">Wystarczą 4 proste kroki</p>
            <img src='../assets/Decoration.png' alt="decoration"></img>
            <div className="_4_steps_grey_area">
                <div className="_4_steps_grey_area_subcontainer">
                    <img src='../assets/shirticon.png' alt='shirt photo'></img>
                    <p>Wybierz rzeczy</p>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="_4_steps_grey_area_subcontainer">
                    <p>zdjecie</p>
                    <p>Spakuj je</p>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="_4_steps_grey_area_subcontainer">
                    <p>zdjęcie</p>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <p className="untraceable_margin">wybierz zaufane miejsce</p>
                </div>
                <div className="_4_steps_grey_area_subcontainer">
                    <img src='../assets/refreshicon.png' alt="process icon"></img>
                    <p>Zamów kuriera</p>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
                <div className="_4_steps_subbutton_container"><p className="_4_steps_subbutton">ODDAJ RZECZY</p></div>
        </div>
            <div className="about_us"></div>
        </div>
    );
}

export default Home;