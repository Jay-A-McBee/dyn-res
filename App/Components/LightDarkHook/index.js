import React, {useState} from 'react';
import {theme} from '../globalStyles/theme';


export const useTheme = (defaultTheme) => {
    let [activeTheme, setTheme] = useState(defaultTheme);

    const changeTheme = val => setTheme(val);

    return {
        changeTheme,
        theme: theme[activeTheme]
    }
}