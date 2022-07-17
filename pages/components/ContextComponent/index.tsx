import React, { useContext } from 'react';
import { ThemeContext, ThemeUpdateContext } from '../ContextProvider';

const Index = () => {
    const theme = useContext(ThemeContext);
    const setTheme = useContext(ThemeUpdateContext);

    return (
        <>
            <button onClick={() => setTheme!()}>change Theme</button>
            <div style={{
                width: '300px',
                height: '300px',
                backgroundColor: theme ? '#000' : '#00f',
                color: theme ? '#fff' : '#000'
            }}>
                hello
            </div>
        </>
    )
}

export default Index;