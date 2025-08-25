import React from "react";

const receivedData = [
  { id: 1, item: "Black Forest", quantity: 100 },
  { id: 2, item: "Vanilla Creams", quantity: 100 },
  { id: 3, item: "Red Velvet", quantity: 100 },
  { id: 4, item: "Marble Blocks", quantity: 100 },
  { id: 5, item: "Sweet Rising", quantity: 50 },
  { id: 6, item: "Doughnut Plain", quantity: 80 },
  { id: 7, item: "Doughnut Cream", quantity: 50 },
  { id: 8, item: "Doughnut Choco", quantity: 50 },
  { id: 9, item: "Doughnut Coconut", quantity: 50 },
  { id: 10, item: "Doughnut Sprink./S.Berry", quantity: 50 },
  { id: 11, item: "Queen Cakes", quantity: 50 },
  { id: 12, item: "Tea Scones", quantity: 30 },
  { id: 13, item: "Chocolate Fudge Cake", quantity: 100 },
  { id: 14, item: "Pinacolada", quantity: 100 },
  { id: 15, item: "Lemon Cream", quantity: 100 },
  { id: 16, item: "Muffins", quantity: 100 },
  { id: 17, item: "Blueberry", quantity: 50 },
  { id: 18, item: "Cup Cakes", quantity: 100 },
  { id: 19, item: "Coconut Cream", quantity: 50 },
  { id: 20, item: "Passion Cream", quantity: 100 },
];

export default function Received() {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Received Stock</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Item
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {receivedData.map((row) => (
            <tr key={row.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.item}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {row.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
