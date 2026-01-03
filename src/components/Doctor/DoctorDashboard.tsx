import React from 'react';
import { Calendar, Users, Clock, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const DoctorDashboard: React.FC = () => {
  const todayAppointments = 8;
  const totalPatients = 45;
  const upcomingSlots = 3;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Good morning, Dr. Johnson!</h1>
        <p className="text-gray-600">You have {todayAppointments} appointments scheduled for today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Today's</p>
              <p className="text-2xl font-bold">{todayAppointments}</p>
              <p className="text-green-100 text-sm">Appointments</p>
            </div>
            <Calendar className="h-8 w-8 text-green-100" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total</p>
              <p className="text-2xl font-bold">{totalPatients}</p>
              <p className="text-blue-100 text-sm">Patients</p>
            </div>
            <Users className="h-8 w-8 text-blue-100" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Available</p>
              <p className="text-2xl font-bold">{upcomingSlots}</p>
              <p className="text-purple-100 text-sm">Slots Today</p>
            </div>
            <Clock className="h-8 w-8 text-purple-100" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Rating</p>
              <p className="text-2xl font-bold">4.8</p>
              <p className="text-orange-100 text-sm">Average</p>
            </div>
            <TrendingUp className="h-8 w-8 text-orange-100" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Calendar className="h-6 w-6 text-green-600" />
            Today's Schedule
          </h3>
          <div className="space-y-4">
            {[
              { time: '09:00 AM', patient: 'John Smith', type: 'Follow-up', status: 'completed' },
              { time: '10:30 AM', patient: 'Mary Johnson', type: 'Consultation', status: 'in-progress' },
              { time: '11:00 AM', patient: 'Robert Davis', type: 'Check-up', status: 'upcoming' },
              { time: '02:00 PM', patient: 'Lisa Wilson', type: 'Emergency', status: 'upcoming' },
              { time: '03:30 PM', patient: 'David Brown', type: 'Follow-up', status: 'upcoming' },
            ].map((appointment, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-16 text-center">
                  <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{appointment.patient}</p>
                  <p className="text-gray-600 text-sm">{appointment.type}</p>
                </div>
                <div>
                  {appointment.status === 'completed' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Completed
                    </span>
                  )}
                  {appointment.status === 'in-progress' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <Clock className="h-3 w-3 mr-1" />
                      In Progress
                    </span>
                  )}
                  {appointment.status === 'upcoming' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Upcoming
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              Urgent Alerts
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm font-medium">Emergency Patient</p>
                <p className="text-red-600 text-xs">Lisa Wilson - Chest pain</p>
              </div>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800 text-sm font-medium">Lab Results Ready</p>
                <p className="text-amber-600 text-xs">John Smith - Blood work</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              This Week's Stats
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Patients Seen</span>
                <span className="font-semibold text-gray-900">32</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Avg. Rating</span>
                <span className="font-semibold text-gray-900">4.8/5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Response Time</span>
                <span className="font-semibold text-gray-900">2.3 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Patient Records</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Patient</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Visit</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Condition</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'John Smith', visit: '2024-12-15', condition: 'Hypertension', status: 'Stable' },
                { name: 'Mary Johnson', visit: '2024-12-14', condition: 'Diabetes', status: 'Monitoring' },
                { name: 'Robert Davis', visit: '2024-12-13', condition: 'Arthritis', status: 'Improving' },
              ].map((patient, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{patient.name}</td>
                  <td className="py-3 px-4 text-gray-600">{patient.visit}</td>
                  <td className="py-3 px-4 text-gray-600">{patient.condition}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      patient.status === 'Stable' ? 'bg-green-100 text-green-800' :
                      patient.status === 'Monitoring' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;