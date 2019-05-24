import React from 'react';
import '../css/style.css';
import {
    PieChart, Pie, Sector, Cell, ResponsiveContainer
} from 'recharts';
const Increase = () => {
    return(
        <div className="dashboard-main__difference">
            <h2 className="dashboard-main__digits">102</h2>
            <h2 className="dashboard-main__title">Increase</h2>
        </div>
    )
}

export default Increase;