import React, {useEffect, useState} from 'react';
import decoration from '../assets/Decoration.svg'
import StartHelping from './StartHelping'
import YellowStripe from "./YellowStripe";
import FourSteps from './FourSteps'
import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";


const data = {
    "fundacje": [
        {
            "title": "Fundacja 'Dbam O Zdrowie'",
            "subtitle": "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            "desc": "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            "title": "Fundacja 'Dla dzieci'",
            "subtitle": "Cel i misja: Pomoc dzieciom z ubogich rodzin",
            "desc": "ubrania, meble, zabawki"
        },
        {
            "title": "Fundacja 'Bez domu'",
            "subtitle": "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            "desc": "ubrania, jedzenie, ciepłe koce"
        },
        {
            "title": "Fundacja 'Dbam O Zdrowie'",
            "subtitle": "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            "desc": "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            "title": "Fundacja 'Dla dzieci'",
            "subtitle": "Cel i misja: Pomoc dzieciom z ubogich rodzin",
            "desc": "ubrania, meble, zabawki"
        },
        {
            "title": "Fundacja 'Bez domu'",
            "subtitle": "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            "desc": "ubrania, jedzenie, ciepłe koce"
        },
        {
            "title": "Fundacja 'Dla dzieci'",
            "subtitle": "Cel i misja: Pomoc dzieciom z ubogich rodzin",
            "desc": "ubrania, meble, zabawki"
        },
        {
            "title": "Fundacja 'Bez domu'",
            "subtitle": "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            "desc": "ubrania, jedzenie, ciepłe koce"
        },
        {
            "title": "Fundacja Dzieciom",
            "subtitle": "Pomoc dla potrzebujących dzieci",
            "desc": "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            "title": "Fundacja 'Dbam O Zdrowie'",
            "subtitle": "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            "desc": "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            "title": "Fundacja 'Dla dzieci'",
            "subtitle": "Cel i misja: Pomoc dzieciom z ubogich rodzin",
            "desc": "ubrania, meble, zabawki"
        },
        {
            "title": "Fundacja 'Bez domu'",
            "subtitle": "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            "desc": "ubrania, jedzenie, ciepłe koce"
        },
    ],
    "organizacje": [
        {
            "title": "Organizacja Przyroda",
            "subtitle": "Ochrona środowiska naturalnego",
            "desc": "Zajmujemy się ochroną przyrody i edukacją ekologiczną. Pomagamy w utrzymaniu równowagi ekosystemów lokalnych."
        },
        {
            "title": "Organizacja Edukacja",
            "subtitle": "Wsparcie edukacyjne dla młodzieży",
            "desc": "Oferujemy programy edukacyjne i stypendia dla zdolnej młodzieży z ubogich rodzin."
        }
    ],
    "lokalne": [
        {
            "title": "Lokalna Inicjatywa Parkowa",
            "subtitle": "Zadbajmy o nasze zielone miejsca",
            "desc": "Działamy na rzecz zachowania i rozbudowy miejsc zielonych w naszym mieście. Organizujemy akcje sadzenia drzew i dbania o parki."
        },
        {
            "title": "Lokalne Centrum Kultury",
            "subtitle": "Szerzenie kultury w naszym regionie",
            "desc": "Promujemy lokalnych artystów i organizujemy wydarzenia kulturalne dla mieszkańców naszego miasta."
        }
    ]
}
function Home() {
    const [current, setCurrent] = useState("fundacje");
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0)


    useEffect(() => {
        setPage(0)
        setItems(data[current])
    }, [current]);

    const paginated = items.slice(page * 3, page * 3 + 3)

    return (
        <div>
          <StartHelping />
            <YellowStripe />
            <FourSteps />
            <AboutUs />

            <div className="who_do_we_help_container">
                <p>Komu pomagamy?</p>
                <img src={decoration} alt="decoration"></img>
                <div className="bottom_buttons_container">
                    <p id="charitiesBtn" onClick={() => setCurrent("fundacje")}>Fundacjom</p>
                    <p id="organisationsBtn" onClick={() => setCurrent("organizacje")}>Organizacjom pozarządowym</p>
                    <p id="localcollectionsBtn" onClick={() => setCurrent("lokalne")}>Lokalnym zbiórkom</p>
                </div>
                <div className="who_do_we_help_subcontainer">
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                    z którymi współpracujemy. Możesz sprawdzić czym się zajmują,
                    komu pomagają i czego potrzebują</p>
                </div>
                    <div className="list_container">
                    <ul>
                        {paginated.map(el => (
                            <>
                            <li key={el.title}>
                                <p>{el.title} <span>{el.desc}</span> </p>
                                <p>{el.subtitle}</p>

                            </li>
                                <hr></hr>
                    </>
                        ))}
                    </ul>
                </div>
                <div className="pages_numbers"><p>
                    {new Array(Math.ceil(items.length/3)).fill(null).map((_, i) => (
                        <span className={i === page && "active"} key={i} onClick={() => setPage(i)}>{i + 1}</span>
                    ))}
                </p>
                </div>
            </div>
            < ContactForm />
        </div>
    );
}

export default Home;