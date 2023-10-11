import React from 'react';
import { useState } from 'react';

function Zaloguj() {
    const [loginData, setLoginData] = useState({ login: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Wprowadzone dane:', loginData);
    };

    return (
        <div>
            <h2>Formularz Logowania</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login">Login:</label>
                    <input
                        type="text"
                        id="login"
                        name="login"
                        value={loginData.login}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Hasło:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                </div>
            <div>
                <button type="submit">Zaloguj się</button>
            </div>
            </form>
        </div>
    );
}

export default Zaloguj;