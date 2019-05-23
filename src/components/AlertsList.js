import React from 'react';
import '../css/style.css';

import AlertListItem from '../components/AlertListItem';

const AlertsList = (props) => {

    const alertItems = props.alerts.map((alert, index) => {
        return (
            <AlertListItem 
                key={index} 
                alert={alert}
            />
        );
    })

    return (
        <ul className="alerts-list"> {alertItems} </ul>
    );
}


export default AlertsList;