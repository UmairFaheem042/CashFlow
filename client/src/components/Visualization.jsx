import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from "recharts";
const data = [
  { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 500, pv: 2400, amt: 200 },
  { name: "Mar", uv: 500, pv: 2400, amt: 200 },
  { name: "Apr", uv: 1000, pv: 2400, amt: 200 },
  { name: "May", uv: 200, pv: 2400, amt: 200 },
];

const Visualization = () => {
  return (
    <div className="border w-full flex items-center justify-center lg:w-auto h-full p-2 rounded-md">
      <BarChart height={350} width={700} data={data} className="py-4">
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          barSize={30}
          fill="#8884d8"
          //   label={renderCustomBarLabel}
        />
      </BarChart>
    </div>
  );
};

export default Visualization;
