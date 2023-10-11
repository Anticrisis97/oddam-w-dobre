import React, { useState } from 'react';
import '../css/contactform.css';
import decoration from '../assets/Decoration.svg';

function ContactForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: '',
    });

    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (submitted && name === "username" && value.length < 1) {
            setError('XYZ 123');
        } else {
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (formData.username.length < 1) {
            setError('XYZ 123');
        } else {
            setError('');
            // Obsługa przesłania formularza
            // Przykład: console.log(formData);
        }
    };

    return (
        <div className='contact_form_main_container'>
            <div className='contact_form_container'>
                <p>Skontaktuj się z nami</p>
                <img src={decoration} alt='decoration'></img>
                <div className='name_and_email_container'>
                    <form onSubmit={handleSubmit}>
                        <div className='name_and_email_container1'>
                            <label htmlFor="username">Wpisz swoje imię</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder='Krzysztof'
                                value={formData.username}
                                onChange={handleChange}
                            />
                            <hr></hr>
                            {submitted && error && <p>{error}</p>}
                        </div>
                        <div className='name_and_email_container2'>
                            <label htmlFor="email">Wpisz swój email:</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder='abc@xyz.pl'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <hr></hr>
                        </div>
                        <div className='msg_container'>
                            <label htmlFor="message">Wpisz swoją wiadomość:</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <hr></hr>
                        </div>
                        <div className='send_button'>
                            <button type="submit" id="sendButton" className="send-button">Wyślij</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;