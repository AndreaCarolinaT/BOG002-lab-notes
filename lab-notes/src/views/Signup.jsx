import React, { useState } from 'react';
import GoogleIcon from '../assets/GoogleIcon.png';
import MainNavBar from '../components/MainNavBar';
import BigLogo from '../components/BigLogo';
import SigupUser from '../firebase/firebaseAuth.js';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    function registerUser(e) {
        e.preventDefault();
        SigupUser(email, password);
    };

    return (
        <section>
            <BigLogo />
            <div>
                <MainNavBar />
            </div>
            <form onSubmit={registerUser} className='signupForm'>
                <h1>Crear cuenta</h1>
                <label htmlFor='name'>Nombre o apodo</label>
                <input type='text' placeholder='nombre o apodo' required></input>
                <label htmlFor='email'>Correo electrónico</label>
                <input onChange={(e) => { setEmail(e.target.value) }}
                    type='email' placeholder='email' className='input' required />
                <label htmlFor='password'>Contraseña</label>
                <input onChange={(e) => { setPass(e.target.value) }}
                    type='password' placeholder='crear contraseña' className='input' required />
                <button type='submit' className='button'>Registrarme</button>
                <div className="question">
                    <p>¿Ya tienes una cuenta?<a href={'/login'}>Inicia sesión aquí</a><br />
                        ó</p>
                </div>
                <button type='submit'><img src={GoogleIcon} alt='logoGoogle' />Ingresa con Google</button>
            </form>
            <div>
            </div>
        </section>
    )
}

export default Signup