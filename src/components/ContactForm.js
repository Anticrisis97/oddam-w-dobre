import React, { useState } from 'react';
import '../css/contactform.css';
import decoration from '../assets/Decoration.svg';

function ContactForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (formData.username.length < 1) {
            newErrors.username = 'To pole jest wymagane.';
        }

        if (
            formData.email.length === 0 ||
            formData.email.indexOf('@') === -1 || //
            /[@#$%^&*()=+:;\/?,]/.test(formData.email)
        ) {
            newErrors.email = 'Pole jest puste, zawiera niepoprawne znaki lub nie zawiera "@".';
        }

        if (formData.message.length < 1) {
            newErrors.message = 'To pole jest wymagane';
        }

        if (formData.message.length < 120) {
            newErrors.message = 'Wiadomość musi zawierać minimalnie 120 znaków'
        }

        setErrors(newErrors);
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
                            {errors.username && <p>{errors.username}</p>}
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
                            {errors.email && <p>{errors.email}</p>}
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
                            {errors.message && <p>{errors.message}</p>}
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
