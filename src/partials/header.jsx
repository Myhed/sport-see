import React from 'react';
import { Navigation } from '../components/navigation/nav';
import { Sidebar } from '../components/sidebar/sidebar';

export const Header = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <Sidebar />
        </>
    );
};
