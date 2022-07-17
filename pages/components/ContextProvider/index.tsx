import { defaultMaxListeners } from 'events';
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext<boolean | null>(null);
export const ThemeUpdateContext = createContext<Function | null>(null);

const Index = (props: React.PropsWithChildren) => {
    const [isDark, setTheme] = useState<boolean>(false);
    const toggleTheme = () => {
        setTheme(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={isDark}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {props.children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export default Index;