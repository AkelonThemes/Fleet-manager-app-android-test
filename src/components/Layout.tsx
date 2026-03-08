import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Car, 
  Calendar, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  Menu,
  ArrowLeft
} from 'lucide-react';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  title: string;
  isDarkMode: boolean;
}

export default function Layout({ children, currentPage, setCurrentPage, title, isDarkMode }: LayoutProps) {
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`relative flex min-h-screen w-full flex-col bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 overflow-x-hidden ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between bg-white/80 dark:bg-slate-900/80 p-4 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          {currentPage === 'vehicle-details' ? (
            <button 
              onClick={() => setCurrentPage('fleet')}
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
          ) : (
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors">
              <Menu size={20} />
            </button>
          )}
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            <Search size={20} />
          </button>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            <Bell size={20} />
            <span className="absolute right-2.5 top-2.5 flex h-2 w-2 rounded-full bg-rose-500"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-24">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-4 pb-6 pt-2 backdrop-blur-lg">
        <div className="mx-auto flex max-w-lg justify-around items-center">
          <NavButton 
            active={currentPage === 'dashboard'} 
            onClick={() => setCurrentPage('dashboard')}
            icon={<LayoutDashboard size={22} />}
            label="Dashboard"
          />
          <NavButton 
            active={currentPage === 'fleet' || currentPage === 'vehicle-details'} 
            onClick={() => setCurrentPage('fleet')}
            icon={<Car size={22} />}
            label="Fleet"
          />
          <NavButton 
            active={currentPage === 'bookings'} 
            onClick={() => setCurrentPage('bookings')}
            icon={<Calendar size={22} />}
            label="Tasks"
          />
          <NavButton 
            active={currentPage === 'customers'} 
            onClick={() => setCurrentPage('customers')}
            icon={<Users size={22} />}
            label="CRM"
          />
          <NavButton 
            active={currentPage === 'settings'} 
            onClick={() => setCurrentPage('settings')}
            icon={<Settings size={22} />}
            label="Settings"
          />
        </div>
      </nav>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${
        active ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'
      }`}
    >
      <div className="flex h-8 items-center justify-center">
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </button>
  );
}
