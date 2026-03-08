import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Phone, 
  Mail, 
  UserCheck, 
  ChevronRight,
  Car
} from 'lucide-react';
import { customers } from '../types';

export default function Customers() {
  const mainCustomer = customers[0];

  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Stats Overview */}
      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        <CustomerStat label="Total" value="1,240" change="+12%" trend="up" />
        <CustomerStat label="Active" value="850" change="+5%" trend="up" />
        <CustomerStat label="Overdue" value="12" change="-2%" trend="down" />
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2">
        {['All', 'Active', 'Overdue'].map((f) => (
          <button
            key={f}
            className={`rounded-full px-5 py-1.5 text-sm font-semibold transition-colors ${
              f === 'All' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Main Profile Detail */}
      <section>
        <div className="rounded-3xl border border-indigo-100 bg-indigo-50/50 p-6 dark:border-indigo-900/30 dark:bg-indigo-900/10">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-sm dark:border-slate-800">
              <img src={mainCustomer.image} alt={mainCustomer.name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{mainCustomer.name}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{mainCustomer.type} • Joined {mainCustomer.joined}</p>
              <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                <UserCheck size={12} /> Verified Profile
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-3 font-bold text-white shadow-lg shadow-indigo-200 transition-all active:scale-95 dark:shadow-indigo-900/20">
              <Phone size={18} /> Call
            </button>
            <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3 font-bold transition-all active:scale-95 dark:border-slate-700 dark:bg-slate-800">
              <Mail size={18} className="text-indigo-600" /> Email
            </button>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <p className="text-slate-500 dark:text-slate-400">Customer ID</p>
              <p className="font-semibold">{mainCustomer.id}</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-500 dark:text-slate-400">Driver's License</p>
              <p className="font-semibold">B-992-1102-01</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Rentals */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Recent Rentals</h3>
          <button className="text-sm font-semibold text-indigo-600">View History</button>
        </div>
        <div className="flex flex-col gap-3">
          <RentalItem name="Tesla Model 3" date="Dec 12 - Dec 15, 2023" price="$450" />
          <RentalItem name="BMW X5 xDrive" date="Nov 20 - Nov 22, 2023" price="$720" />
        </div>
      </section>

      {/* Other Customers */}
      <section className="pb-8">
        <h3 className="mb-4 text-lg font-bold">Other Customers</h3>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {customers.slice(1).map((customer) => (
            <div key={customer.id} className="flex items-center gap-3 py-4">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                <img src={customer.image} alt={customer.name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <p className="font-bold">{customer.name}</p>
                <p className={`text-xs ${customer.type === 'Overdue' ? 'text-rose-500' : 'text-slate-500'}`}>
                  {customer.type} • {customer.rentals} Rentals
                </p>
              </div>
              <button className="flex h-10 w-10 items-center justify-center text-slate-400">
                <ChevronRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CustomerStat({ label, value, change, trend }: { label: string; value: string; change: string; trend: 'up' | 'down' }) {
  return (
    <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
      <p className="text-2xl font-bold tracking-tight">{value}</p>
      <p className={`flex items-center gap-1 text-sm font-semibold ${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
        {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {change}
      </p>
    </div>
  );
}

function RentalItem({ name, date, price }: { name: string; date: string; price: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
        <Car className="text-slate-500" size={20} />
      </div>
      <div className="flex-1">
        <p className="font-bold">{name}</p>
        <p className="text-xs text-slate-500">{date}</p>
      </div>
      <p className="font-bold text-indigo-600">{price}</p>
    </div>
  );
}
