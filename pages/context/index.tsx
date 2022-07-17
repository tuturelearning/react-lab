import { NextPage } from 'next';
import React from 'react';
import ContextComponent from '../components/ContextComponent';
import ContextProvider from '../components/ContextProvider';

const index: NextPage = () => {
    return (
        <ContextProvider>
            <ContextComponent />
        </ContextProvider>
    )
}

export default index;