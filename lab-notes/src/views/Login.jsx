import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import GoogleIcon from '../assets/GoogleIcon.png';
import MainNavBar from '../components/MainNavBar.jsx';
import BigLogo from '../components/BigLogo.jsx';

import { GoogleAuth, SigninUser } from '../firebase/firebaseAuth.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    let history = useHistory();

    const LoginUser = (e) => {
        e.preventDefault();
        SigninUser(email, password)
            .then(() => {
                alert('Bienvenido!!')
                history.push('/mainpage')
            });
    };

    return (
        <section>
            <BigLogo />
            <div>
                <MainNavBar />
            </div>
			<form onSubmit={LoginUser} className='loginForm'>
                <h1>Iniciar Sesión</h1>
				<label htmlFor='email'>Correo electrónico</label>
                <input
                    onChange={(e) => { setEmail(e.target.value) }} type='email' placeholder='email' className='input' required />
                <label htmlFor='password'>Contraseña</label>
                <input
                    onChange={(e) => { setPass(e.target.value) }} type='password' placeholder='contraseña' className='input' required />
                <button type='submit' className='button'>Iniciar sesión</button>
                <div className="question">
                    <p>¿No tienes una cuenta?<a href={'/signup'}>Regístrate aquí</a><br />
                        ó</p>
						<button type='submit' onClick={GoogleAuth}><img src={GoogleIcon} alt='logoGoogle' /> Ingresa con Google</button>
                </div>
            </form>
            <div>
            </div>
        </section>
    );
};
export default Login