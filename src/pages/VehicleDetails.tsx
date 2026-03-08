import React from 'react';
import { 
  ArrowLeft, 
  MoreHorizontal, 
  Fingerprint, 
  PlayCircle, 
  Wrench, 
  PlusCircle, 
  Trash2,
  ChevronRight
} from 'lucide-react';
import { Vehicle, Page } from '../types';

interface VehicleDetailsProps {
  vehicle: Vehicle;
  onBack: () => void;
}

export default function VehicleDetails({ vehicle, onBack }: VehicleDetailsProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Image */}
      <div className="p-4">
        <div 
          className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 bg-cover bg-center shadow-sm dark:border-slate-800 dark:bg-slate-800"
          style={{ backgroundImage: `url(${vehicle.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>

      {/* Vehicle Summary */}
      <div className="flex flex-col gap-4 px-4">
        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-800">
            <img 
              src={vehicle.image} 
              alt={vehicle.name} 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-extrabold tracking-tight">{vehicle.name}</h2>
            <div className="mt-1 space-y-0.5">
              <p className="text-sm font-semibold text-indigo-600">Long Range Dual Motor</p>
              <p className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                <Fingerprint size={12} />
                VIN: {vehicle.vin || '5YJ3E1EB7KF000000'}
              </p>
            </div>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3">
          <SpecItem label="Year" value={vehicle.year?.toString() || '2023'} />
          <SpecItem label="Odometer" value={vehicle.odometer || '12,450 mi'} />
          <SpecItem 
            label="Status" 
            value={
              <div className="flex items-center gap-1.5">
                <span className={`h-2 w-2 rounded-full ${vehicle.status === 'available' ? 'bg-emerald-500' : 'bg-indigo-500'}`}></span>
                <span className="capitalize">{vehicle.status.replace('-', ' ')}</span>
              </div>
            } 
          />
          <SpecItem label="Battery" value={vehicle.battery || '84%'} />
        </div>

        {/* Primary Actions */}
        <div className="mt-2 flex gap-3">
          <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all active:scale-95 dark:shadow-indigo-900/20">
            <PlayCircle size={18} />
            Mark In Use
          </button>
          <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600 transition-all active:scale-95 dark:bg-indigo-900/30 dark:text-indigo-400">
            <Wrench size={18} />
            Maintenance
          </button>
        </div>

        {/* Secondary Actions */}
        <div className="flex gap-3">
          <button className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
            <PlusCircle size={18} />
            Add to Hire
          </button>
          <button className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-rose-100 bg-white text-sm font-semibold text-rose-500 dark:border-rose-900/30 dark:bg-slate-900">
            <Trash2 size={18} />
            Remove
          </button>
        </div>

        {/* Related Vehicles */}
        <section className="mt-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">Fleet Management</h3>
            <button className="text-sm font-semibold text-indigo-600">View All</button>
          </div>
          <div className="space-y-3">
            <RelatedItem 
              name="BMW i4 eDrive40" 
              vin="7W3A1..." 
              status="In Use" 
              statusColor="bg-orange-100 text-orange-600"
              image="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=100"
            />
            <RelatedItem 
              name="Audi Q4 e-tron" 
              vin="WAUZZ..." 
              status="Ready" 
              statusColor="bg-emerald-100 text-emerald-600"
              image="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=100"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function SpecItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</p>
      <div className="mt-1 text-lg font-bold">{value}</div>
    </div>
  );
}

function RelatedItem({ name, vin, status, statusColor, image }: { name: string; vin: string; status: string; statusColor: string; image: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-800">
        <img src={image} alt={name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="truncate font-bold">{name}</p>
        <p className="text-xs text-slate-500">VIN: {vin}</p>
      </div>
      <div className="text-right">
        <span className={`inline-block rounded px-2 py-1 text-[10px] font-bold uppercase ${statusColor}`}>
          {status}
        </span>
      </div>
    </div>
  );
}
