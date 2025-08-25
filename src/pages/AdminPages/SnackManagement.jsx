import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';

const SnackManagement = () => {
  const [snacks, setSnacks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingSnack, setEditingSnack] = useState(null);

  useEffect(() => {
    // Fetch snacks data
    fetchSnacks();
  }, []);

  const fetchSnacks = async () => {
    // Mock data - replace with actual API call
    const mockSnacks = [
      { id: 1, snackName: 'Protein Bars', brand: 'HealthPlus', price: 250, stock: 45, category: 'Protein' },
      { id: 2, snackName: 'Nuts Mix', brand: 'NuttyDelight', price: 180, stock: 38, category: 'Nuts' },
      { id: 3, snackName: 'Dried Fruits', brand: 'FruitBasket', price: 120, stock: 32, category: 'Fruits' },
    ];
    setSnacks(mockSnacks);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this snack?')) {
      setSnacks(snacks.filter(snack => snack.id !== id));
    }
  };

  const filteredSnacks = snacks.filter(snack =>
    snack.snackName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    snack.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Snack Management</h1>
          <p className="text-gray-600">Manage all snacks in your inventory</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="mt-4 sm:mt-0 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <FontAwesomeIcon icon={faPlus} className="w-4 h-4 mr-2" />
          Add New Snack
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search snacks by name or brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
            <option value="">All Categories</option>
            <option value="protein">Protein</option>
            <option value="nuts">Nuts</option>
            <option value="fruits">Fruits</option>
          </select>
        </div>
      </div>

      {/* Snacks Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">All Snacks ({filteredSnacks.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Snack</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSnacks.map((snack) => (
                <tr key={snack.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        <span className="text-amber-600 font-medium text-sm">S</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{snack.snackName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{snack.brand}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">KES {snack.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      snack.stock > 20 ? 'bg-green-100 text-green-800' :
                      snack.stock > 10 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {snack.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{snack.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingSnack(snack)}
                        className="text-amber-600 hover:text-amber-900"
                      >
                        <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(snack.id)}
                        className="text-red-600 hover:text-red-900"
                      >
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

export default SnackManagement;
