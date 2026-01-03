import React from 'react';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Building, 
  Stethoscope,
  BarChart3,
  Clock,
  DollarSign
} from 'lucide-react';

const HospitalDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">City General Hospital</h1>
        <p className="text-gray-600">Administrative Dashboard - System Overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Total</p>
              <p className="text-2xl font-bold">25</p>
              <p className="text-purple-100 text-sm">Doctors</p>
            </div>
            <Stethoscope className="h-8 w-8 text-purple-100" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Active</p>
              <p className="text-2xl font-bold">1,245</p>
              <p className="text-blue-100 text-sm">Patients</p>
            </div>
            <Users className="h-8 w-8 text-blue-100" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Today's</p>
              <p className="text-2xl font-bold">86</p>
              <p className="text-green-100 text-sm">Appointments</p>
            </div>
            <Calendar className="h-8 w-8 text-green-100" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Revenue</p>
              <p className="text-2xl font-bold">$24.5K</p>
              <p className="text-orange-100 text-sm">This Week</p>
            </div>
            <DollarSign className="h-8 w-8 text-orange-100" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-purple-600" />
            Department Performance
          </h3>
          <div className="space-y-6">
            {[
              { dept: 'Cardiology', doctors: 5, patients: 324, utilization: 85, revenue: '$12.4K' },
              { dept: 'Neurology', doctors: 3, patients: 198, utilization: 78, revenue: '$8.2K' },
              { dept: 'Orthopedics', doctors: 4, patients: 267, utilization: 92, revenue: '$10.1K' },
              { dept: 'Emergency', doctors: 6, patients: 456, utilization: 95, revenue: '$15.6K' },
            ].map((dept, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{dept.dept}</h4>
                  <span className="text-green-600 font-medium">{dept.revenue}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Doctors</p>
                    <p className="font-medium text-gray-900">{dept.doctors}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Patients</p>
                    <p className="font-medium text-gray-900">{dept.patients}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Utilization</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{ width: `${dept.utilization}%` }}
                        ></div>
                      </div>
                      <span className="font-medium text-gray-900">{dept.utilization}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Clock className="h-5 w-5 text-blue-600" />
              Real-time Status
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Available Beds</span>
                <span className="font-semibold text-green-600">23/50</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">OR Availability</span>
                <span className="font-semibold text-blue-600">2/5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">ER Wait Time</span>
                <span className="font-semibold text-orange-600">12 min</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Staff on Duty</span>
                <span className="font-semibold text-purple-600">18/25</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Key Metrics
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-600 text-sm">Patient Satisfaction</span>
                  <span className="font-semibold text-gray-900">4.6/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-600 text-sm">Appointment Fill Rate</span>
                  <span className="font-semibold text-gray-900">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-600 text-sm">Doctor Availability</span>
                  <span className="font-semibold text-gray-900">72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Top Performing Doctors</h3>
          <div className="space-y-4">
            {[
              { name: 'Dr. Sarah Johnson', specialty: 'Cardiology', rating: 4.9, patients: 324 },
              { name: 'Dr. Michael Chen', specialty: 'Neurology', rating: 4.8, patients: 287 },
              { name: 'Dr. Emily Davis', specialty: 'Orthopedics', rating: 4.7, patients: 298 },
              { name: 'Dr. Robert Wilson', specialty: 'Emergency', rating: 4.6, patients: 456 },
            ].map((doctor, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{doctor.name}</p>
                  <p className="text-gray-600 text-sm">{doctor.specialty}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">★ {doctor.rating}</p>
                  <p className="text-gray-600 text-sm">{doctor.patients} patients</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activities</h3>
          <div className="space-y-4">
            {[
              { time: '2 min ago', action: 'New patient registration', dept: 'Reception' },
              { time: '5 min ago', action: 'Emergency admission', dept: 'ER' },
              { time: '12 min ago', action: 'Surgery completed', dept: 'OR-3' },
              { time: '18 min ago', action: 'Lab results uploaded', dept: 'Pathology' },
              { time: '25 min ago', action: 'Discharge processed', dept: 'Cardiology' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 border-l-4 border-blue-200 bg-blue-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-gray-900 text-sm font-medium">{activity.action}</p>
                  <p className="text-gray-600 text-xs">{activity.dept} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;