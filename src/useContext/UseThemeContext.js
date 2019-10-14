import React, { useState, useEffect, useContext } from 'react';
import Island from '../common/Island';

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
};
const ThemeContext = React.createContext(themes.light);


const Toolbar = () => {
    return (
        <div>
            <ThemedButton />
            <ThemedText />
        </div>
    );
};

const ThemedText = () => {
    const theme = useContext(ThemeContext);

    return (
        <div style={{
            background: theme.background,
            color: theme.foreground
        }}>
            Themed text
        </div>
    )
};

const ThemedButton = () => {
    const theme = useContext(ThemeContext);

    return (
        <button style={{
            background: theme.background,
            color: theme.foreground
        }}>
            I am styled by theme context!
        </button>
    );
};


const UseThemeContext = () => {
    const [theme, setTheme] = useState(themes.light);

    const handleClick = () => theme === themes.light
        ? setTheme(themes.dark)
        : setTheme(themes.light);

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <Island title='UseThemeContext'>
                    <Toolbar />
                    <button onClick={handleClick}>change theme</button>
                </Island>
            </ThemeContext.Provider>
        </>
    );
};

export default UseThemeContext;
