import React, {useState} from 'react';
import {theme} from '../globalStyles/theme';


export const useTheme = () => {
    let [activeTheme, setTheme] = useState('dark');

    const changeTheme = () => {
        debugger
        const toggle = {
            light: 'dark',
            dark: 'light'
        }

        setTheme(toggle[activeTheme]);
    }

    return {
        changeTheme,
        theme: theme[activeTheme]
    }
}