import React from "react";
import Logo from '../assets/Logo2.png';


const Header = () => {
    return <header className="header-page">
        <img src={Logo} alt="logo-pcesar" />
        <h1 className="title-page">Task Manager</h1>
    </header>
}

export default Header;