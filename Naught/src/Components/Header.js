import React from "react";
import { UilToggleOff } from '@iconscout/react-unicons'

const Header = ({handleToggleDarkMode}) => {
    return (
        <div className="header"> 
            <h1>Naught</h1>
            
            <button onClick={() => 
                handleToggleDarkMode(
                    (previoudDarkMode) => ! previoudDarkMode)} 
                className="save toggle"> <UilToggleOff/></button>
        </div>
    );
};

export default Header;