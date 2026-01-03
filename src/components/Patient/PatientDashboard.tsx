import React from 'react';
import { Calendar, FileText, Heart, Clock, TrendingUp, AlertCircle } from 'lucide-react';
import { mockAppointments, mockMedicalRecords } from '../../services/mockData';

const PatientDashboard: React.FC = () => {
  const upcomingAppointments = mockAppointments.filter(apt => apt.status === 'scheduled');
  const recentRecords = mockMedicalRecords.slice(0, 3);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
        <p className="text-gray-600">Here's your health overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Upcoming</p>
              <p className="text-2xl font-bold">{upcomingAppointments.length}</p>
              <p className="text-blue-100 text-sm">Appointments</p>
            </div>
            <Calendar className="h-8 w-8 text-blue-100" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Medical</p>
              <p className="text-2xl font-bold">{mockMedicalRecords.length}</p>
              <p className="text-green-100 text-sm">Records</p>
            </div>
            <FileText className="h-8 w-8 text-green-100" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Health</p>
              <p className="text-2xl font-bold">Good</p>
              <p className="text-purple-100 text-sm">Status</p>
            </div>
            <Heart className="h-8 w-8 text-purple-100" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Last Visit</p>
              <p className="text-2xl font-bold">5</p>
              <p className="text-orange-100 text-sm">Days ago</p>
            </div>
            <Clock className="h-8 w-8 text-orange-100" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Calendar className="h-6 w-6 text-blue-600" />
            Upcoming Appointments
          </h3>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Dr. Sarah Johnson</p>
                  <p className="text-gray-600 text-sm">{appointment.type}</p>
                  <p className="text-blue-600 text-sm font-medium">
                    {appointment.date} at {appointment.time}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Confirmed
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FileText className="h-6 w-6 text-green-600" />
            Recent Medical Records
          </h3>
          <div className="space-y-4">
            {recentRecords.map((record) => (
              <div key={record.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{record.diagnosis}</p>
                  <p className="text-gray-600 text-sm">{record.date}</p>
                  <p className="text-gray-500 text-xs">
                    {record.symptoms.slice(0, 2).join(', ')}
                  </p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-purple-600" />
          Health Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900">Cardiovascular Health</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Your recent blood pressure readings show improvement. Keep up with your medication schedule.
            </p>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="h-8 w-8 text-amber-600" />
              <h4 className="font-semibold text-gray-900">Reminder</h4>
            </div>
            <p className="text-gray-600 text-sm">
              You have a follow-up appointment for your migraine treatment in 2 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;