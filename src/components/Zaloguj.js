import React, {useState} from 'react';
import '../css/login.css'
import decoration from '../assets/Decoration.svg'

function Zaloguj() {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [errorEmail, setErrorEmail] = useState('');
        const [errorPassword, setErrorPassword] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();

            // Walidacja emaila
            if (!email.includes('@')) {
                setErrorEmail('Email musi zawierać znak @');
            } else {
                setErrorEmail('');
            }

            // Walidacja hasła
            if (password.length < 6) {
                setErrorPassword('Hasło musi mieć co najmniej 6 znaków');
            } else {
                setErrorPassword('');
            }

            // Jeśli walidacja przeszła, można wysłać dane
            if (email.includes('@') && password.length >= 6) {
                // Tutaj możesz dodać kod do wysłania danych
                console.log('Email:', email);
                console.log('Hasło:', password);
            }
        };

    return (
        <div className='login_container'>
            <h1>Zaloguj się</h1>
            <img className='decor_login' src={decoration} alt='decoration'></img>
            <div className='inputs_container'>
                <form onSubmit={handleSubmit}>
                    <div className='email_input_login'>
                        <label>Email:</label>
                        <input
                            id='email'
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <hr></hr>
                        <p className="error">{errorEmail}</p>
                    </div>
                    <div className='password_input_login'>
                        <label className='password_label'>Hasło:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <hr></hr>
                        <p className="error">{errorPassword}</p>
                    </div>
                </form>
                </div>
                    <div className='login_buttons_container'>
                    <button type="submit" className="create_acc_button">Załóż konto</button>
                        <button type="submit" className="create_acc_button">Zaloguj się</button>
                </div>


        </div>
    );
}

export default Zaloguj;