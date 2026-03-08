import React from 'react';
import { 
  Layers, 
  CalendarCheck, 
  AlertCircle, 
  Plus, 
  Search, 
  TrendingUp, 
  TrendingDown,
  MoreHorizontal
} from 'lucide-react';
import { bookings } from '../types';

export default function Bookings() {
  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Stats Grid */}
      <div className="flex flex-wrap gap-4">
        <BookingStat 
          label="Total Bookings" 
          value="128" 
          change="+12%" 
          trend="up" 
          icon={<Layers className="text-indigo-600" size={20} />} 
        />
        <BookingStat 
          label="Active" 
          value="42" 
          change="-2%" 
          trend="down" 
          icon={<CalendarCheck className="text-indigo-600" size={20} />} 
        />
        <BookingStat 
          label="Overdue" 
          value="5" 
          change="+5%" 
          trend="up" 
          icon={<AlertCircle className="text-rose-500" size={20} />} 
        />
      </div>

      {/* Action Area */}
      <div className="flex flex-col gap-4">
        <button className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 text-base font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 active:scale-95 dark:shadow-indigo-900/20">
          <Plus size={20} />
          New Reservation
        </button>
        
        <div className="flex items-center rounded-2xl bg-slate-200/50 p-1 dark:bg-slate-800">
          <button className="flex-1 rounded-xl bg-white py-2 text-sm font-bold text-indigo-600 shadow-sm dark:bg-slate-700">List View</button>
          <button className="flex-1 py-2 text-sm font-bold text-slate-500 dark:text-slate-400">Calendar</button>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search bookings by name or ID..."
            className="h-12 w-full rounded-2xl border-none bg-white px-11 text-slate-900 shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-600 dark:bg-slate-900 dark:text-slate-100 dark:ring-slate-800"
          />
        </div>
      </div>

      {/* Bookings List */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Recent Bookings</h3>
          <button className="text-sm font-semibold text-indigo-600">View all</button>
        </div>
        <div className="flex flex-col gap-3">
          {bookings.map((booking) => (
            <div key={booking.id} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <img src={booking.image} alt={booking.customer} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold">{booking.customer}</p>
                    <p className="text-xs text-slate-500">Booking ID: {booking.id}</p>
                  </div>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                  booking.status === 'overdue' ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400' :
                  booking.status === 'active' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' :
                  'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                }`}>
                  {booking.status}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-2 dark:border-slate-800">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Check-in</span>
                  <span className="text-sm font-medium">{booking.checkIn}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Room Type</span>
                  <span className="text-sm font-medium">{booking.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function BookingStat({ label, value, change, trend, icon }: { label: string; value: string; change: string; trend: 'up' | 'down'; icon: React.ReactNode }) {
  return (
    <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
        {icon}
      </div>
      <p className="text-2xl font-bold leading-tight">{value}</p>
      <div className="flex items-center gap-1">
        {trend === 'up' ? <TrendingUp size={12} className="text-emerald-500" /> : <TrendingDown size={12} className="text-rose-500" />}
        <p className={`text-xs font-semibold ${trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>{change}</p>
      </div>
    </div>
  );
}
