export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-105 transition transform">
      <h2 className="text-gray-400 text-sm">{title}</h2>
      <p className="text-3xl font-bold mt-2 text-green-400">
        ₹{value}
      </p>
    </div>
  );
}