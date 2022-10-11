import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { Cell, Tooltip, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizsTopics = useLoaderData();
    const chartData = quizsTopics.data;
    const COLORS = ['#00C49F', '#FFBB28', '#0088FE', '#FF8042'];

    return (
        <div className='container col-xl-6 my-5' style={{ height: '400px' }}>
            <h2 className='text-center text-info'>Quiz chart</h2>

            <ResponsiveContainer>
                <BarChart
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" stackId="a" fill="#4ca8cd" >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;