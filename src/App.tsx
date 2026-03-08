import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Fleet from './pages/Fleet';
import VehicleDetails from './pages/VehicleDetails';
import Bookings from './pages/Bookings';
import Customers from './pages/Customers';
import { Page, Vehicle } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setSelectedVehicle(null);
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setCurrentPage('vehicle-details');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getTitle = () => {
    switch (currentPage) {
      case 'dashboard': return 'Fleet Dashboard';
      case 'fleet': return 'Fleet Overview';
      case 'vehicle-details': return 'Vehicle Details';
      case 'bookings': return 'Bookings';
      case 'customers': return 'CRM';
      case 'settings': return 'Settings';
      default: return 'FleetMaster Pro';
    }
  };

  const renderPage = () => {
    if (selectedVehicle && currentPage === 'vehicle-details') {
      return <VehicleDetails vehicle={selectedVehicle} onBack={() => setCurrentPage('fleet')} />;
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'fleet':
        return <Fleet onSelectVehicle={handleSelectVehicle} />;
      case 'bookings':
        return <Bookings />;
      case 'customers':
        return <Customers />;
      case 'settings':
        return (
          <div className="flex flex-col gap-6 p-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-4">Appearance</h3>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    {isDarkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>}
                  </div>
                  <div>
                    <p className="font-bold">Dark Mode</p>
                    <p className="text-xs text-slate-500">Switch between light and dark themes</p>
                  </div>
                </div>
                <button 
                  onClick={toggleDarkMode}
                  className={`relative h-7 w-12 rounded-full transition-colors duration-200 focus:outline-none ${isDarkMode ? 'bg-indigo-600' : 'bg-slate-300'}`}
                >
                  <div className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-4">Account</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-slate-600 dark:text-slate-400">Notifications</p>
                  <span className="text-indigo-600 font-bold">Enabled</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-slate-600 dark:text-slate-400">Language</p>
                  <span className="text-slate-900 dark:text-white font-bold">English</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleNavigate('dashboard')}
              className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20"
            >
              Save Changes
            </button>
          </div>
        );
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout 
      currentPage={currentPage} 
      setCurrentPage={handleNavigate} 
      title={getTitle()}
      isDarkMode={isDarkMode}
    >
      {renderPage()}
    </Layout>
  );
}
