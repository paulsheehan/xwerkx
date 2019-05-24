import React from 'react';
import '../css/style.css';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


const data = [
    {
       uv: 4000,
    },
    {
       uv: 3000,
    },
    {
       uv: 2000,
    },
    {
       uv: 2780,
    },
    {
       uv: 1890,
    },
    {
       uv: 2390,
    },
    {
      uv: 3490
    },
    {
        uv: 2000,
     },
     {
        uv: 2780,
     },
     {
        uv: 1890,
     },
     {
        uv: 2390,
     },
     {
       uv: 3490
     }
  ];


const LastTwelveMonths = (props) => {
    return(
        <div className="dashboard-main__bar">
            <ResponsiveContainer>
                <BarChart data={data}>
                    <Bar dataKey="uv" fill="#67a3e7" background={{ fill: '#596169' }} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LastTwelveMonths;
