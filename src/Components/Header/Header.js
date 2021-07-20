import React, {useContext, useEffect, useState} from 'react'
// import {PaymentContext} from '../../Context/PaymentContext'
import Logo from '../../Assets/logo.svg'
import DarkModeLogo from '../../Assets/darkModeLogo.svg'
import '../Header/Header.css'


 const Header = () => {
    // const {darkMode} = useContext(PaymentContext)
    const darkMode = 1800
    const [darkModeStyle, setDarkModeStyle] = useState({
        headerStyles: 'hamburger_menu', 
        logo: Logo
    })


useEffect(()=>{
    if(darkMode >= 1800 || darkMode <= 600){
        setDarkModeStyle({
            headerStyles: 'hamburger_menu_dark',
            logo: DarkModeLogo
        })
    }
}, [])
    return (
        <div id='header'>
            <div className='header_containers'></div>
            <div className='logo'>
                <img id='logo_img' src={darkModeStyle.logo} alt='logo'></img>
            </div>
            <div className='header_containers'>

                {/* <div id='hamburger_container'>
                <div className={darkModeStyle.headerStyles}></div>
                <div className={darkModeStyle.headerStyles}></div>
                <div className={darkModeStyle.headerStyles}></div>
                </div> */}

            </div>

        </div>
    )
}
export default Header;
