import React, { useEffect, useState } from "react";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-bold border-b-green-600 border-b-2 w-6/12 mx-auto my-4 mb-12 p-4">
        Visitors status
      </h2>
      <div className="charts flex flex-col items-center gap-8 p-8 mb-12">
        <div className="linechart">
          <LineChart
            width={700}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="investment" stroke="#16A34A" />
            <Line type="monotone" dataKey="sell" stroke="#9880F3" />
            <Line type="monotone" dataKey="revenue" stroke="#f88fF3" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis dataKey="investment" />
            <Tooltip />
          </LineChart>
        </div>

        <div className="radialchart">
          <BarChart width={700} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sell" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#0aa97c" />
            <Bar dataKey="investment" fill="#16A34A" />
          </BarChart>
        </div>

        <div className="composedchart">
          <ComposedChart width={700} height={250} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="sell"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="investment" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="revenue" stroke="#16A34A" />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
