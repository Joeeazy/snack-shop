import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";

const InventoryManagement = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    // Mock bakery data
    const mockItems = [
      { id: 1, itemName: "Black Forest", category: "Cake", price: 1000, stock: 100 },
      { id: 2, itemName: "Doughnut Plain", category: "Doughnut", price: 50, stock: 80 },
      { id: 3, itemName: "Tea Scones", category: "Pastry", price: 30, stock: 30 },
      { id: 4, itemName: "Blueberry", category: "Cake", price: 100, stock: 50 },
      { id: 5, itemName: "Pepsi 500ML", category: "Drink", price: 80, stock: 40 },
    ];
    setItems(mockItems);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const filteredItems = items.filter(
    (item) =>
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600">Manage cakes, doughnuts, cookies & drinks</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="mt-4 sm:mt-0 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <FontAwesomeIcon icon={faPlus} className="w-4 h-4 mr-2" />
          Add New Item
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              />
              <input
                type="text"
                placeholder="Search items by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
            <option value="">All Categories</option>
            <option value="Cake">Cake</option>
            <option value="Doughnut">Doughnut</option>
            <option value="Pastry">Pastry</option>
            <option value="Drink">Drink</option>
          </select>
        </div>
      </div>

      {/* Items Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">All Items ({filteredItems.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.itemName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">KES {item.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        item.stock > 50
                          ? "bg-green-100 text-green-800"
                          : item.stock > 20
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button onClick={() => setEditingItem(item)} className="text-amber-600 hover:text-amber-900">
                        <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-900">
                        <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
