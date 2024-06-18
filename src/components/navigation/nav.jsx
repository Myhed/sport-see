import React from 'react';
import './styles/nav.style.css';
export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#">
                        <img src="/images/logo.svg" />
                    </a>
                </li>
                <li>
                    <a href="#">Accueil</a>
                </li>
                <li>
                    <a href="#">Profile</a>
                </li>
                <li>
                    <a href="#">Reglage</a>
                </li>
                <li>
                    <a href="#">Communaute</a>
                </li>
            </ul>
        </nav>
    );
};
