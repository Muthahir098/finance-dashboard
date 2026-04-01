import { useState, useEffect } from "react";

export default function Transactions({ role }) {
  const [filter, setFilter] = useState("");

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
  });

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            date: "2026-03-01",
            amount: 5000,
            category: "Salary",
            type: "income",
          },
          {
            id: 2,
            date: "2026-03-02",
            amount: 1200,
            category: "Food",
            type: "expense",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(data));
  }, [data]);

  const handleAdd = () => {
    if (!form.amount || !form.category) return;

    const newTx = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      amount: form.amount,
      category: form.category,
      type: form.type,
    };

    setData([...data, newTx]);
    setForm({ amount: "", category: "", type: "expense" });
  };

  const filtered = data.filter((t) =>
    filter ? t.type === filter : true
  );

  return (
    <div className="bg-gray-800 p-5 rounded-2xl shadow mt-6">
      <h2 className="font-bold mb-3 text-white">Transactions</h2>

      {/* Filter */}
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="bg-gray-700 text-white p-2 rounded mb-3"
      >
        <option value="">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Admin Form */}
      {role === "admin" && (
        <div className="flex gap-2 mb-3 flex-wrap">
          <input
            value={form.amount}
            placeholder="Amount"
            className="bg-gray-700 text-white p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, amount: +e.target.value })
            }
          />
          <input
            value={form.category}
            placeholder="Category"
            className="bg-gray-700 text-white p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />
          <select
            value={form.type}
            className="bg-gray-700 text-white p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <button
            onClick={handleAdd}
            className="bg-green-500 px-3 rounded text-white"
          >
            Add
          </button>
        </div>
      )}

      {/* List */}
      {filtered.map((t) => (
        <div key={t.id} className="flex justify-between border-b border-gray-600 py-2 text-sm">
          <span>{t.date}</span>
          <span>₹{t.amount}</span>
          <span>{t.category}</span>
          <span
            className={
              t.type === "income" ? "text-green-400" : "text-red-400"
            }
          >
            {t.type}
          </span>
        </div>
      ))}
    </div>
  );
}