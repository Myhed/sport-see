import React from 'react';
import './style/sidebar.style.css';

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <img src="/images/icon.svg" />
                </li>
                <li>
                    <img src="/images/icon1.svg" />
                </li>
                <li>
                    <img src="/images/icon2.svg" />
                </li>
                <li>
                    <img src="/images/icon3.svg" />
                </li>
            </ul>
        </aside>
    );
};
