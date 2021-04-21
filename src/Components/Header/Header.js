import React from 'react'
import Logo from '../../Assets/logo.svg'
import '../Header/Header.css'


 const Header = () => {
    return (
        <div id='header'>
            <div className='header_containers'></div>
            <div className='logo'>
                <img id='logo_img' src={Logo} alt='logo'></img>
            </div>
            <div className='header_containers'>

                <div id='hamburger_container'>
                <div className='hamburger_menu'></div>
                <div className='hamburger_menu'></div>
                <div className='hamburger_menu'></div>
                </div>

            </div>

        </div>
    )
}
export default Header;
