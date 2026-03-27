export default function ActivityCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">
        Recent Activity
      </h3>

      <ul className="space-y-3 text-sm text-gray-600">
        <li>✔ Confirm order update</li>
        <li>⚠ Finish shipping update</li>
        <li>➕ Create new order</li>
        <li>✔ Update payment report</li>
      </ul>
    </div>
  );
}