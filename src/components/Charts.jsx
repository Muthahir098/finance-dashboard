import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Charts() {
  const data = [
    { name: "Jan", amount: 4000 },
    { name: "Feb", amount: 3000 },
    { name: "Mar", amount: 5000 },
  ];

  const pieData = [
    { name: "Food", value: 1200 },
    { name: "Transport", value: 800 },
    { name: "Shopping", value: 1500 },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      
      {/* Line Chart */}
      <div className="bg-gray-800 p-4 rounded-2xl shadow h-64">
        <h2 className="font-bold mb-2 text-white">Balance Trend</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line dataKey="amount" stroke="#22c55e" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-gray-800 p-4 rounded-2xl shadow h-64">
        <h2 className="font-bold mb-2 text-white">Spending Breakdown</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={pieData} dataKey="value" />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}