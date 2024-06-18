import React from 'react';
import { ProfileContainer } from '../containers/profile-container';
import { Header } from '../partials/header';

import './styles/page.style.css';

export const Profile = () => {
    return (
        <main>
            <Header />
            <ProfileContainer />
        </main>
    );
};
