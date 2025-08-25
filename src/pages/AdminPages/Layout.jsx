import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faBox, 
  faShoppingCart, 
  faUsers, 
  faChartBar, 
  faCog, 
  faSignOutAlt,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

// Admin Page Components
import AdminDashboard from './AdminDashboard';
import SnackManagement from './SnackManagement';
import OrderManagement from './OrderManagement';
import UserManagement from './UserManagement';
import Analytics from './Analytics';
import Settings from './Settings';
import Received from './Received';
import Closing from './Closing';
import InventoryManagement from './InventoryManagement';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: faHome },
    { name: 'Snack Management', href: '/admin/snacks', icon: faBox },
    { name: 'Inventory Management', href: '/admin/inventory', icon: faBox },
    { name: 'Orders', href: '/admin/orders', icon: faShoppingCart },
    { name: 'Users', href: '/admin/users', icon: faUsers },
    { name: 'Received', href: '/admin/received', icon: faShoppingCart },
    { name: 'Closing', href: '/admin/closing', icon: faUsers },
    { name: 'Analytics', href: '/admin/analytics', icon: faChartBar },
    { name: 'Settings', href: '/admin/settings', icon: faCog },
  ];

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-800">Snack Admin</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <nav className="mt-8 px-4">
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-amber-100 text-amber-700 border-r-2 border-amber-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className={`mr-3 w-4 h-4 ${
                    isActive(item.href) ? 'text-amber-500' : 'text-gray-400'
                  }`}
                />
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Logout button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-3 w-4 h-4 text-gray-400" />
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-30 bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block">
                <h1 className="text-lg font-medium text-gray-900">
                  {navigation.find(item => isActive(item.href))?.name || 'Admin Panel'}
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Admin profile dropdown could go here */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">A</span>
                </div>
                <span className="hidden sm:block text-sm font-medium text-gray-700">Admin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/snacks" element={<SnackManagement />} />
              <Route path="/orders" element={<OrderManagement />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/received" element={<Received />} />
              <Route path="/closing" element={<Closing />} />
              <Route path="/inventory" element={<InventoryManagement />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}
