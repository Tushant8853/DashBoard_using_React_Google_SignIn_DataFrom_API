import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Box5() {
  const [data, setData] = useState(null);
  const countryIndices = [2, 7, 21, 94, 220]; // Specific country indices

  useEffect(() => {
    fetch('https://coronavirus.m.pipedream.net/')
      .then(response => response.json())
      .then(data => {
        const limitedData = countryIndices.map(index => data.rawData[index]);
        setData(limitedData);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const chartData = data.map(item => ({
    country: item.Country_Region,
    deaths: item.Deaths,
  }));

  return (
    <div className="box_row1">
      <ResponsiveContainer width={700} height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="deaths" fill="black" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Box5;
