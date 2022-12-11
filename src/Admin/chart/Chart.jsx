import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({title, data, datakey, grid}) {
    
  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#21a558'/>
                <YAxis stroke='#21a558'/>
                <Line type="monotone" dataKey={datakey} stroke='#21a558'/>
                <Tooltip/>
                {grid && <CartesianGrid strokeDasharray="5 5"/>}
                <Legend/>
                {/* <Line type="monotone" dataKey="Active User 2021" stroke='red'/> */}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart