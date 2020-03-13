import React from 'react';
import { useDarkMode } from "../Hooks/useDarkMode";

const Navbar = () => {
    const [darkMode, setDarkmode] = useDarkMode(false);
    const toggleMode = event => {
        event.preventDefault();
        setDarkmode(!darkMode);
    };
    return (
        <nav className="navbar">
           <h1> Women's World Cup players ranked in search interest, June-July 2019, worldwide</h1>
           <div className="dark-mode_toggle">
                <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}/>
           </div>
        </nav>
    );
};

export default Navbar;