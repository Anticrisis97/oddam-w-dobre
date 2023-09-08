import React from 'react';

function Home() {
    return (
        <div>
        <div className="start_helping">
            <h1>Zacznij pomagać!</h1><h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <img src="../assets/Decoration.png" alt="dekoracja"/>
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
            <div className="4_steps_container">
                <p>Wystarczą 4 proste kroki</p>
                <img src='../assets/Decoration.png' alt="dekoracja"></img>
                <div className="4_steps_grey_area">
                    <div className="4_steps_grey_area_subcontainer">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;