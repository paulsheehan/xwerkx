import React, { Component } from 'react';
import '../css/style.css';
import arrow from '../img/svg/right_arrow.svg';
import settings from '../img/svg/settings.svg';

import ActiveClients from './ActiveClients';
import LastTwelveMonths from './LastTwelveMonths';
import Increase from './Increase';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {x: 0, y: 8},
                {x: 1, y: 5},
                {x: 2, y: 4},
                {x: 3, y: 9},
                {x: 4, y: 1},
                {x: 5, y: 7},
                {x: 6, y: 6},
                {x: 7, y: 3},
                {x: 8, y: 2},
                {x: 9, y: 0}
            ]
        }
    }

    render() {

        return (
            <div className="dashboard">
                <div className="dashboard-nav">
                    <div className="dashboard-nav__title">
                        <h3 >
                            CLIENTS 
                        </h3>
                        <img src={arrow} alt="Right Arrow"/>
                        
                    </div>
                    
                    <img src={settings} alt="Settings"/>
                </div>
                <div className="dashboard-main">
                    <ActiveClients data={this.state.data} />
                    <LastTwelveMonths />
                    <Increase />
                </div>
            </div>
        )
    }
}

export default Dashboard;