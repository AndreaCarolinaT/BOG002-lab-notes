import React from 'react';
import GoogleIcon from '../assets/GoogleIcon.png';
import MainNavBar from '../components/MainNavBar.jsx';
import BigLogo from '../components/BigLogo.jsx';


const Login = () => {
    return (
        <section>
            <BigLogo />
            <div>
                <MainNavBar />
            </div>
            <form className='loginForm'>
                <h1>Iniciar Sesión</h1>
                <label for='email'>Correo electrónico</label>
                <input type='email' placeholder='email' className='input' required />
                <label for='password'>Contraseña</label>
                <input type='password' placeholder='password' className='input' required />
                <button type='submit' className='button'>Iniciar sesión</button>
                <div class="question">
                    <p>¿No tienes una cuenta?<a href={'http://localhost:3000/signup'}>Regístrate aquí</a><br />
                        ó</p>
                    <button type='submit'><img src={GoogleIcon} alt='logoGoogle' /> Ingresa con Google</button>
                </div>
            </form>
            <div>
            </div>
        </section>
    );
};

export default Login
