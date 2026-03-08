import React from 'react';
import { Search, Info, Battery, Fuel, Wrench } from 'lucide-react';
import { vehicles, Page, Vehicle } from '../types';

interface FleetProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export default function Fleet({ onSelectVehicle }: FleetProps) {
  const [filter, setFilter] = React.useState('All');

  const filteredVehicles = filter === 'All' 
    ? vehicles 
    : vehicles.filter(v => v.status.replace('-', ' ') === filter.toLowerCase());

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="Search vehicles, VIN or plates..."
          className="h-12 w-full rounded-2xl border-none bg-white px-12 text-base shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-600 dark:bg-slate-900 dark:ring-slate-800"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {['All', 'Available', 'Rented', 'In Service'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              filter === f 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Stats Mini Grid */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-medium text-slate-500">Total</p>
          <p className="text-xl font-bold">124</p>
          <p className="text-[10px] font-bold text-emerald-600">+2%</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-medium text-slate-500">Available</p>
          <p className="text-xl font-bold">86</p>
          <p className="text-[10px] font-bold text-emerald-600">+5%</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-medium text-slate-500">Service</p>
          <p className="text-xl font-bold">12</p>
          <p className="text-[10px] font-bold text-rose-500">-1%</p>
        </div>
      </div>

      {/* Vehicle List */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">Active Vehicles</h3>
        {filteredVehicles.map((vehicle) => (
          <div 
            key={vehicle.id}
            onClick={() => onSelectVehicle(vehicle)}
            className="flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-100 bg-white/50 p-3 shadow-sm transition-all hover:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-slate-900"
          >
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
              <img 
                src={vehicle.image} 
                alt={vehicle.name} 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <h4 className="truncate font-bold">{vehicle.name}</h4>
                <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  vehicle.status === 'available' ? 'bg-emerald-100 text-emerald-700' :
                  vehicle.status === 'rented' ? 'bg-indigo-100 text-indigo-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  {vehicle.status.replace('-', ' ')}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Plate: {vehicle.plate} • {vehicle.range ? `Range: ${vehicle.range}` : vehicle.fuel ? `Fuel: ${vehicle.fuel}` : `Service: ${vehicle.nextService}`}
              </p>
              {(vehicle.battery || vehicle.fuel) && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div 
                      className={`h-full ${vehicle.status === 'available' ? 'bg-indigo-600' : 'bg-slate-400'}`} 
                      style={{ width: vehicle.battery || '45%' }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-600">{vehicle.battery || '45%'}</span>
                </div>
              )}
              {vehicle.status === 'in-service' && (
                <div className="mt-2 flex items-center gap-1 text-amber-600">
                  <Wrench size={12} />
                  <span className="text-[10px] font-bold">Estimated Completion: 2h</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
