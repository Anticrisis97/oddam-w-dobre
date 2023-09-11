import React from 'react';
import decoration from '../assets/Decoration.svg'
import shirt from '../assets/Icon-1.svg'
import bag from '../assets/Icon-2.svg'
import magnifyingglass from '../assets/Icon-3.svg'
import processicon from '../assets/Icon-4.svg'
import people from '../assets/People.jpg'
import signature from '../assets/Signature.svg'


const charitiesBtn = document.getElementById('charitiesBtn');
const organisationsBtn = document.getElementById('organisationsBtn');
const localcollectionsBtn = document.getElementById('localcollectionsBtn')
function Home() {
    return (
        <div>
            <div className="start_helping">
                <h1>Zacznij pomagać!</h1><h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration} alt="decoration"/>
                <div className="top_buttons_container">
                    <span className="top_buttons">ODDAJ RZECZY</span><span
                    className="top_buttons">ZORGANIZUJ ZBIÓRKĘ</span>
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
            <div className="who_do_we_help_container">
                <p>Komu pomagamy?</p>
                <img src={decoration} alt="decoration"></img>
                <div className="bottom_buttons_container">
                    <p id="charitiesBtn">Fundacjom</p>
                    <p id="organisationsBtn">Organizacjom pozarządowym</p>
                    <p id="localcollectionsBtn">Lokalnym zbiórkom</p>
                </div>
                <div className="who_do_we_help_subcontainer">
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                    z którymi współpracujemy. Możesz sprawdzić czym się zajmują,
                    komu pomagają i czego potrzebują</p>
                </div>
                    <div className="list_container">
                    <ul>
                        <li>
                            <p>Fundacja "Dbam o Zdrowie" <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span> </p>
                            <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>

                        </li>
                        <hr></hr>
                        <li>
                            <p>Fundacja "Dla dzieci" <span>ubrania, meble, zabawki</span> </p>
                            <p>Cel i misja: Pomoc dzieciom z ubogich rodzin</p>
                        </li>
                        <hr></hr>
                        <li>
                            <p>Fundacja "Bez domu" <span>ubrania, jedzenie, ciepłe koce</span> </p>
                            <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania</p>

                        </li>
                    </ul>
                </div>
                <div className="pages_numbers"><p> <span>1</span> <span>2</span> <span>3</span>
                </p>
                </div>
            </div>
        </div>
    );
}

export default Home;