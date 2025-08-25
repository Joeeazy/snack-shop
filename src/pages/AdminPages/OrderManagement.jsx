import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTruck, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    // Mock data - replace with actual API call
    const mockOrders = [
      { id: 1, customer: 'John Doe', email: 'john@example.com', amount: 2500, status: 'Delivered', date: '2024-01-15', items: 3 },
      { id: 2, customer: 'Jane Smith', email: 'jane@example.com', amount: 1800, status: 'Processing', date: '2024-01-14', items: 2 },
      { id: 3, customer: 'Mike Johnson', email: 'mike@example.com', amount: 3200, status: 'Shipped', date: '2024-01-13', items: 4 },
      { id: 4, customer: 'Sarah Wilson', email: 'sarah@example.com', amount: 950, status: 'Pending', date: '2024-01-12', items: 1 },
    ];
    setOrders(mockOrders);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = selectedStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status === selectedStatus);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
        <p className="text-gray-600">Manage and track all customer orders</p>
      </div>

      {/* Status Filter */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedStatus('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedStatus === 'all' 
                ? 'bg-amber-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Orders ({orders.length})
          </button>
          <button
            onClick={() => setSelectedStatus('Pending')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedStatus === 'Pending' 
                ? 'bg-amber-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Pending ({orders.filter(o => o.status === 'Pending').length})
          </button>
          <button
            onClick={() => setSelectedStatus('Processing')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedStatus === 'Processing' 
                ? 'bg-amber-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Processing ({orders.filter(o => o.status === 'Processing').length})
          </button>
          <button
            onClick={() => setSelectedStatus('Shipped')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedStatus === 'Shipped' 
                ? 'bg-amber-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Shipped ({orders.filter(o => o.status === 'Shipped').length})
          </button>
          <button
            onClick={() => setSelectedStatus('Delivered')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedStatus === 'Delivered' 
                ? 'bg-amber-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Delivered ({orders.filter(o => o.status === 'Delivered').length})
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Orders ({filteredOrders.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">#{order.id}</div>
                    <div className="text-sm text-gray-500">{order.items} items</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                    <div className="text-sm text-gray-500">{order.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    KES {order.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
                      </button>
                      {order.status === 'Pending' && (
                        <button 
                          onClick={() => updateOrderStatus(order.id, 'Processing')}
                          className="text-yellow-600 hover:text-yellow-900"
                        >
                          <FontAwesomeIcon icon={faTruck} className="w-4 h-4" />
                        </button>
                      )}
                      {order.status === 'Processing' && (
                        <button 
                          onClick={() => updateOrderStatus(order.id, 'Shipped')}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <FontAwesomeIcon icon={faTruck} className="w-4 h-4" />
                        </button>
                      )}
                      {order.status === 'Shipped' && (
                        <button 
                          onClick={() => updateOrderStatus(order.id, 'Delivered')}
                          className="text-green-600 hover:text-green-900"
                        >
                          <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
                        </button>
                      )}
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

export default OrderManagement;
