import { 
  LayoutDashboard, 
  Car, 
  Calendar, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  Menu, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Wrench, 
  MapPin, 
  ChevronRight, 
  MoreHorizontal, 
  ArrowLeft,
  PlayCircle,
  PlusCircle,
  Trash2,
  Fingerprint,
  Layers,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  UserCheck,
  History,
  Fuel,
  Battery,
  Navigation
} from 'lucide-react';

export type Page = 'dashboard' | 'fleet' | 'vehicle-details' | 'bookings' | 'customers' | 'settings';

export interface Vehicle {
  id: string;
  name: string;
  plate: string;
  status: 'available' | 'rented' | 'in-service' | 'overdue';
  image: string;
  range?: string;
  fuel?: string;
  battery?: string;
  nextService?: string;
  year?: number;
  odometer?: string;
  vin?: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 'TRK-204',
    name: 'Tesla Model 3',
    plate: 'ABC-1234',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=400',
    range: '310mi',
    battery: '82%',
    year: 2023,
    odometer: '12,450 mi',
    vin: '5YJ3E1EB7KF000000'
  },
  {
    id: 'TRK-112',
    name: 'Ford Explorer',
    plate: 'XYZ-9876',
    status: 'rented',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400',
    fuel: '45%',
    nextService: '2,400mi'
  },
  {
    id: 'TRK-089',
    name: 'Mercedes C-Class',
    plate: 'LUX-0011',
    status: 'in-service',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=400',
    nextService: 'Oil Change'
  },
  {
    id: 'BMW-0505',
    name: 'BMW X5',
    plate: 'BMW-0505',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=400',
    fuel: 'Full Tank',
    battery: '95%'
  }
];

export const maintenanceItems = [
  { id: 1, title: 'Oil Change Needed', vehicle: 'TRK-089', status: 'Overdue 3 days', icon: Wrench, color: 'text-rose-500', bg: 'bg-rose-50' },
  { id: 2, title: 'Tire Rotation', vehicle: 'VAN-442', status: 'Scheduled Today', icon: History, color: 'text-amber-500', bg: 'bg-amber-50' },
  { id: 3, title: 'Brake Inspection', vehicle: 'TRK-102', status: 'In 400 miles', icon: CheckCircle2, color: 'text-primary', bg: 'bg-primary/10' },
];

export const bookings = [
  { id: '#BK-8842', customer: 'Alex Thompson', status: 'overdue', checkIn: 'Oct 12, 2023', type: 'Deluxe Suite', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100' },
  { id: '#BK-9210', customer: 'Sarah Jenkins', status: 'active', checkIn: 'Oct 14, 2023', type: 'Standard King', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100' },
  { id: '#BK-7751', customer: 'Michael Chen', status: 'pending', checkIn: 'Oct 18, 2023', type: 'Executive Room', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100' },
];

export const customers = [
  { id: '#CR-882910', name: 'Johnathan Doe', type: 'Premium Member', joined: '2022', status: 'Verified', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
  { id: '#CR-112233', name: 'Sarah Jenkins', type: 'Active', rentals: 12, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100' },
  { id: '#CR-445566', name: 'Michael Chen', type: 'Overdue', rentals: 3, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100' },
];
