import React from 'react';
import GoogleIcon from '../assets/GoogleIcon.png';
import MainNavBar from '../components/MainNavBar';
import BigLogo from '../components/BigLogo';

const Signup = () => {
    return (
        <section>
            <BigLogo />
            <div>
                <MainNavBar />
            </div>
            <form className='signupForm'>
                <h1>Crear cuenta</h1>
                <label for='name'>Nombre o apodo</label>
                <input type='text' placeholder='nombre o apodo' required></input>
                <label for='email'>Correo electrónico</label>
                <input type='email' placeholder='email' className='input' required />
                <label or='password'>Contraseña</label>
                <input type='password' placeholder='crear contraseña' className='input' required />
                <button type='submit' className='button'>Registrarme</button>
                <div class="question">
                    <p>¿Ya tienes una cuenta?<a href={'http://localhost:3000/login'}>Inicia sesión aquí</a><br />
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