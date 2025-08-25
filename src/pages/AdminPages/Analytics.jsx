import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30d');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Business insights and performance metrics</p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <FontAwesomeIcon icon={faChartLine} className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="text-sm font-medium text-gray-900 mb-1">Revenue Growth</h4>
          <p className="text-2xl font-bold text-green-600">+17.2%</p>
          <p className="text-sm text-gray-500">vs last period</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <FontAwesomeIcon icon={faChartBar} className="w-8 h-8 text-blue-600" />
          </div>
          <h4 className="text-sm font-medium text-gray-900 mb-1">Order Volume</h4>
          <p className="text-2xl font-bold text-blue-600">+17.1%</p>
          <p className="text-sm text-gray-500">vs last period</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <FontAwesomeIcon icon={faChartPie} className="w-8 h-8 text-purple-600" />
          </div>
          <h4 className="text-sm font-medium text-gray-900 mb-1">Customer Growth</h4>
          <p className="text-2xl font-bold text-purple-600">+18.2%</p>
          <p className="text-sm text-gray-500">vs last period</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
