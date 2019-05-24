import React from 'react';
import '../css/style.css';
import {
    PieChart, Pie, Sector, Cell, ResponsiveContainer
} from 'recharts';


const data = [
    { name: 'Group A', value: 400 }
];


const ActiveClients = () => {
    return(
        <div className="dashboard-main__pie">
            <ResponsiveContainer>
                <PieChart >
                <Pie 
                    dataKey="value" 
                    startAngle={180} 
                    endAngle={0} 
                    data={data}  
                    fill="#67a3e7" 
                    innerRadius={50}
                    outerRadius={100} />
                </PieChart>
            </ResponsiveContainer>
        </div>
        
    )
}

export default ActiveClients;