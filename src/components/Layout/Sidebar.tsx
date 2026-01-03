import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Calendar, 
  FileText, 
  Settings, 
  LogOut,
  Home,
  Users,
  BarChart3,
  Stethoscope,
  Building,
  Heart
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const { user, logout } = useAuth();

  const getMenuItems = () => {
    switch (user?.role) {
      case 'patient':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'appointments', label: 'Appointments', icon: Calendar },
          { id: 'records', label: 'Medical Records', icon: FileText },
          { id: 'book-appointment', label: 'Book Appointment', icon: Heart },
        ];
      case 'doctor':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'appointments', label: 'My Appointments', icon: Calendar },
          { id: 'patients', label: 'Patients', icon: Users },
          { id: 'schedule', label: 'Schedule', icon: BarChart3 },
        ];
      case 'hospital':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'doctors', label: 'Doctors', icon: Stethoscope },
          { id: 'appointments', label: 'Appointments', icon: Calendar },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();
  const roleColors = {
    patient: 'bg-blue-600',
    doctor: 'bg-green-600',
    hospital: 'bg-purple-600'
  };

  return (
    <div className="w-64 bg-white shadow-lg h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${roleColors[user?.role || 'patient']} rounded-lg flex items-center justify-center`}>
            {user?.role === 'patient' && <Heart className="h-5 w-5 text-white" />}
            {user?.role === 'doctor' && <Stethoscope className="h-5 w-5 text-white" />}
            {user?.role === 'hospital' && <Building className="h-5 w-5 text-white" />}
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">{user?.name}</h2>
            <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeSection === item.id
                      ? `${roleColors[user?.role || 'patient']} text-white`
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-all">
          <Settings className="h-5 w-5" />
          Settings
        </button>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all mt-2"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;