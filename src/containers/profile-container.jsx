import React from 'react';
import BarChart from '../components/bar-chart/bar-chart';
import LineChart from '../components/line-chart/line-chart';
import './styles/profile-container.style.css';

export const ProfileContainer = () => {
    return (
        <div className="profile-container">
            <div className="title">
                <h1>
                    <span>Bonjour</span>
                    <span> Thomas</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="graph">
                <div className="graph1">
                    <BarChart />
                </div>
                <div className="graph2">
                    <div className="graph-secondary">
                        <BarChart />
                    </div>
                    <div className="graph-secondary">
                        <BarChart />
                    </div>
                    <div className="graph-secondary">
                        <BarChart />
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="detail calories">
                    <img src="/images/calories-icon.svg" />
                    <div className="content">
                        <h3>1,930kCal</h3>
                        <p>Calories</p>
                    </div>
                </div>
                <div className="detail protein">
                    <img src="/images/protein-icon.svg" />
                    <div className="content">
                        <h3>1,930kCal</h3>
                        <p>Calories</p>
                    </div>
                </div>
                <div className="detail carbs">
                    <img src="/images/carbs-icon.svg" />
                    <div className="content">
                        <h3>1,930kCal</h3>
                        <p>Calories</p>
                    </div>
                </div>
                <div className="detail fat">
                    <img src="/images/fat-icon.svg" />
                    <div className="content">
                        <h3>1,930kCal</h3>
                        <p>Calories</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
