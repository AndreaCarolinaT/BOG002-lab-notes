import React from 'react';
import Description from '../assets/Description.png';
import MainNavBar from '../components/MainNavBar.jsx';
import BigLogo from '../components/BigLogo.jsx';

const Home = () => {
    return (
        <section>
            <BigLogo/>
            <div>
                <MainNavBar/>
            </div>
            <div className='description'>
                <img src={Description} alt='description' />
            </div>
        </section>
    );
};

export default Home