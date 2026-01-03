import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from './Layout/Sidebar';
import PatientDashboard from './Patient/PatientDashboard';
import BookAppointment from './Patient/BookAppointment';
import AppointmentHistory from './Patient/AppointmentHistory';
import MedicalRecords from './Patient/MedicalRecords';
import DoctorDashboard from './Doctor/DoctorDashboard';
import PatientManagement from './Doctor/PatientManagement';
import ScheduleManagement from './Doctor/ScheduleManagement';
import HospitalDashboard from './Hospital/HospitalDashboard';
import DoctorManagement from './Hospital/DoctorManagement';
import Analytics from './Hospital/Analytics';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    if (user?.role === 'patient') {
      switch (activeSection) {
        case 'dashboard':
          return <PatientDashboard />;
        case 'book-appointment':
          return <BookAppointment />;
        case 'appointments':
          return <AppointmentHistory />;
        case 'records':
          return <MedicalRecords />;
        default:
          return <PatientDashboard />;
      }
    }

    if (user?.role === 'doctor') {
      switch (activeSection) {
        case 'dashboard':
          return <DoctorDashboard />;
        case 'appointments':
          return <div className="p-8">Doctor Appointments Coming Soon</div>;
        case 'patients':
          return <PatientManagement />;
        case 'schedule':
          return <ScheduleManagement />;
        default:
          return <DoctorDashboard />;
      }
    }

    if (user?.role === 'hospital') {
      switch (activeSection) {
        case 'dashboard':
          return <HospitalDashboard />;
        case 'doctors':
          return <DoctorManagement />;
        case 'appointments':
          return <div className="p-8">Hospital Appointments Coming Soon</div>;
        case 'analytics':
          return <Analytics />;
        default:
          return <HospitalDashboard />;
      }
    }

    return <div>Unknown role</div>;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;