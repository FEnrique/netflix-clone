import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }else {
            handleShow(false);
        }
    }

    useEffect(() => {
       window.addEventListener('scroll', transitionNavBar);
       return () =>  window.removeEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                <img
                className='nav__logo'
                    src='https://www.freepnglogos.com/uploads/netflix-logo-symbol-png-1.png' 
                    alt='Home' 
                />

                <img
                className='nav__avatar'
                    src='https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png' 
                    alt='Home' 
                />
            </div>
        </div>
    )
}

export default Nav
