import React, { Component } from 'react';
import '../css/style.css';

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
                    <div>CLIENTS > </div>
                    <div> *</div>
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