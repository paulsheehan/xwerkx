import React from 'react';
import '../css/style.css';
import cake from '../img/svg/cake.svg';

import ReactSVG from 'react-svg'

const AlertsList = (props) => {
    return (
        <li className="alerts-list__item">
            <div className="alerts-list__icon-container">
                <img className="alerts-list__icon" src={cake} alt="Birthday Cake" />
            </div>
            
            <div>{props.alert.name}</div>
            <div className="alerts-list__message">{props.alert.message}</div>
            <div>{props.alert.date}</div>
            <div>{props.alert.importance}</div>
        </li>
    );
}


export default AlertsList;