import { useState } from "react";
import { useColorScheme } from '../hooks/useColorScheme';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-solid-svg-icons"
import {faMoon} from "@fortawesome/free-solid-svg-icons"

export const DarkModeToggle = () => {


    const { theme, toggleTheme } = useColorScheme();
  return (
    <div className={`toggle-container ${theme === 'dark' ? 'dark' : ''}`} onClick={toggleTheme}>
    <FontAwesomeIcon className="color-icon sun" icon={faSun} />
    <FontAwesomeIcon className="color-icon moon" icon={faMoon} />
    <div className="toggle-switch"></div>
  </div>

)
};