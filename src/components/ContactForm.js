import '../css/contactform.css'
import decoration from '../assets/Decoration.svg'




function ContactForm () {
    return (
        <div className='contact_form_main_container'>
            <div className='contact_form_container'>
                <p>Skontaktuj się z nami</p>
                <img src={decoration} alt='decoration'></img>
                <div className='name_and_email_container'>
                    <form onSubmit={}>
                <div className='name_and_email_container1'>
                    <label htmlFor="username">Wpisz swoje imię</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder='Krzysztof' />
                    <hr></hr>
                </div>
                <div className='name_and_email_container2'>
                    <label htmlFor="email">Wpisz swój email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder='abc@xyz.pl' />
                    <hr></hr>
                </div>
                    <div className='msg_container'>
                        <label htmlFor="messeage">Wpisz swoją wiadomość:</label>
                        <textarea
                            id="messeage"
                            name="messeage"
                            placeholder='Lorem ipsum dolor sit amet,
                             consectetur adipiscing elit, sed do
                             eiusmod tempor incididunt ut labore et
                             dolore magna aliqua. Ut enim ad minim
                             veniam, quis nostrud exercitation ullamco
                             laboris nisi ut aliquip ex ea commodo
                             consequat.'/>
                        <hr></hr>
                    </div>
                </form>
                </div>
                <div className='send_button'>
                    <button type="button" id="sendButton" className="send-button">Wyślij</button>
                </div>
            </div>
        </div>
    )
}

/*
document.addEventListener('DOMContentLoaded', function() {
    console.log("Skrypt działa");
    const form = document.querySelector('form'); // Wybierz formularz, nie pole tekstowe
    const usernameInput = document.getElementById('username'); // Poprawne id bez #

    form.addEventListener('submit', function (event) {
        const usernameValue = usernameInput.value;

        if (!containsOnlyOneWord(usernameValue)) {
            alert('XYZ XYZ');
            event.preventDefault();
        }
    });

    function containsOnlyOneWord(value) {
        const words = value.trim().split(' ');
        return words.length === 1;
    }
}); */


export default ContactForm