export default function Insights() {
  const data = [
    { category: "Food", amount: 1200 },
    { category: "Transport", amount: 800 },
    { category: "Shopping", amount: 1500 },
  ];

  const highest = data.reduce((prev, curr) =>
    curr.amount > prev.amount ? curr : prev
  );

  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow">
      <h2 className="font-bold mb-2 text-white">Insights</h2>

      <p>💸 Highest Spending: {highest.category} (₹{highest.amount})</p>
      <p>📊 Total Categories: {data.length}</p>
    </div>
  );
}