import React from 'react';
import { 
  Radio, 
  CalendarCheck, 
  AlertTriangle, 
  Wrench, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { maintenanceItems, Page } from '../types';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard 
          label="Active Units" 
          value="124" 
          change="+12%" 
          trend="up" 
          icon={<Radio className="text-indigo-600" size={20} />} 
        />
        <StatCard 
          label="Booked" 
          value="42" 
          change="-5%" 
          trend="down" 
          icon={<CalendarCheck className="text-indigo-600" size={20} />} 
        />
        <StatCard 
          label="Overdue" 
          value="5" 
          change="-2%" 
          trend="down" 
          icon={<AlertTriangle className="text-rose-500" size={20} />} 
        />
        <StatCard 
          label="Service" 
          value="12" 
          change="+8%" 
          trend="up" 
          icon={<Wrench className="text-amber-500" size={20} />} 
        />
      </div>

      {/* Map Section */}
      <section>
        <div className="mb-3 flex items-center justify-between px-1">
          <h3 className="text-lg font-bold tracking-tight">Live Fleet Tracking</h3>
          <button className="flex items-center gap-1 text-sm font-semibold text-indigo-600">
            View Full Map <ExternalLink size={14} />
          </button>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
            alt="Fleet Map" 
            className="h-full w-full object-cover opacity-60 grayscale"
            referrerPolicy="no-referrer"
          />
          {/* Mock Markers */}
          <div className="absolute left-1/3 top-1/4 flex flex-col items-center">
            <div className="rounded-full border-2 border-white bg-indigo-600 p-1.5 text-white shadow-lg">
              <Car size={12} />
            </div>
            <div className="mt-1 rounded bg-white/90 px-2 py-0.5 text-[10px] font-bold text-slate-800 shadow-sm backdrop-blur">TRK-204</div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center">
            <div className="rounded-full border-2 border-white bg-emerald-500 p-1.5 text-white shadow-lg">
              <Car size={12} />
            </div>
            <div className="mt-1 rounded bg-white/90 px-2 py-0.5 text-[10px] font-bold text-slate-800 shadow-sm backdrop-blur">TRK-112</div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section>
        <div className="mb-3 flex items-center justify-between px-1">
          <h3 className="text-lg font-bold tracking-tight">Maintenance</h3>
          <button className="text-sm font-medium text-slate-500">History</button>
        </div>
        <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
          {maintenanceItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3 p-4">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                <item.icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-slate-500">{item.vehicle} • {item.status}</p>
              </div>
              <button className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                <ChevronRight size={16} />
              </button>
            </div>
          ))}
          <button className="w-full py-3 text-sm font-bold text-indigo-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            View All Schedule
          </button>
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value, change, trend, icon }: { label: string; value: string; change: string; trend: 'up' | 'down'; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
        {icon}
      </div>
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-xs font-bold ${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>{change}</p>
      </div>
    </div>
  );
}

function Car({ size, className }: { size?: number; className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}
