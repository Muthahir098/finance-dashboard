import { useState } from "react";
import SummaryCard from "./components/SummaryCard";
import Transactions from "./components/Transactions";
import Charts from "./components/Charts";
import Insights from "./components/Insights";

function App() {
  const [role, setRole] = useState("viewer");

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-wide">
          💰 Finance Dashboard
        </h1>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-gray-700 text-white px-3 py-2 rounded-lg"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard title="Balance" value="45000" />
        <SummaryCard title="Income" value="70000" />
        <SummaryCard title="Expenses" value="25000" />
      </div>

      {/* Charts + Insights */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2">
          <Charts />
        </div>
        <Insights />
      </div>

      {/* Transactions */}
      <Transactions role={role} />
    </div>
  );
}

export default App;