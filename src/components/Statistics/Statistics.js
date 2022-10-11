import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { Cell, Tooltip, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizsTopics = useLoaderData();
    const chartData = quizsTopics.data;
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    console.log(chartData);


    return (
        <div className='container col-xl-6 my-5' style={{ height: '400px' }}>
            {/* <PieChart width={700} height={250}>
                <Pie data={chartData} dataKey="total" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label>
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart> */}

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
                    <Legend />
                    {/* <Bar dataKey="pv" stackId="a" fill="#8884d8" /> */}
                    <Bar dataKey="total" stackId="a" fill="#4ca8cd" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;