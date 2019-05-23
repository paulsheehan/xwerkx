import React, { Component } from 'react';
import '../css/style.css';

import AlertsList from './AlertsList';

class Alerts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alerts: [
                {
                    name: 'Adam Compton',
                    message: "Adam's end of year review is coming up",
                    date: "Feb 03",
                    importance: "High"
                },
                {
                    name: "Emma O'Sullivan",
                    message: "Emma's end of year review is coming up",
                    date: "Feb 03",
                    importance: "Low"
                },
                {
                    name: 'Brandon Walsh',
                    message: "Brandon's end of year review is coming up",
                    date: "Feb 03",
                    importance: "Middle"
                }
            ]
        }
    }

    render() {

        return (
            <div className="alerts">
                <div className="alerts-nav">
                    NAV
                </div>
                <AlertsList alerts={this.state.alerts}/>
            </div>
            
        )
    }
}

export default Alerts;