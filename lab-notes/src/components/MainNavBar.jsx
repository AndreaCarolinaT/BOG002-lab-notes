import React from 'react';

const MainNavBar = () => {
    return (
        <div className='mainNavBar'>
            <nav>
                <ul>
                    <li><a href={'http://localhost:3000/signup'}>Registrarme</a></li>
                    <li><a href={'http://localhost:3000/login'}>Iniciar Sesión</a></li>
                    <li><a href={'http://localhost:3000'}>Home</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default MainNavBar