import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Calendar, DollarSign, Clock, Activity, Target } from 'lucide-react';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('week');

  const analyticsData = {
    week: {
      appointments: 186,
      revenue: 24500,
      patientSatisfaction: 4.6,
      avgWaitTime: 12,
      departmentPerformance: [
        { name: 'Cardiology', appointments: 45, revenue: 8200, satisfaction: 4.8 },
        { name: 'Neurology', appointments: 32, revenue: 5800, satisfaction: 4.7 },
        { name: 'Orthopedics', appointments: 38, revenue: 6100, satisfaction: 4.5 },
        { name: 'Emergency', appointments: 71, revenue: 4400, satisfaction: 4.4 }
      ]
    },
    month: {
      appointments: 742,
      revenue: 98200,
      patientSatisfaction: 4.5,
      avgWaitTime: 15,
      departmentPerformance: [
        { name: 'Cardiology', appointments: 180, revenue: 32800, satisfaction: 4.7 },
        { name: 'Neurology', appointments: 128, revenue: 23200, satisfaction: 4.6 },
        { name: 'Orthopedics', appointments: 152, revenue: 24400, satisfaction: 4.4 },
        { name: 'Emergency', appointments: 282, revenue: 17800, satisfaction: 4.3 }
      ]
    }
  };

  const currentData = analyticsData[timeRange as keyof typeof analyticsData];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
          <p className="text-gray-600">Comprehensive insights into hospital performance</p>
        </div>
        
        <div className="flex gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="h-8 w-8 text-blue-100" />
            <div className="text-right">
              <div className="text-2xl font-bold">{currentData.appointments}</div>
              <div className="text-blue-100 text-sm">Appointments</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-blue-100 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span>+12% from last {timeRange}</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 text-green-100" />
            <div className="text-right">
              <div className="text-2xl font-bold">${(currentData.revenue / 1000).toFixed(1)}K</div>
              <div className="text-green-100 text-sm">Revenue</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-green-100 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span>+8% from last {timeRange}</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Target className="h-8 w-8 text-purple-100" />
            <div className="text-right">
              <div className="text-2xl font-bold">{currentData.patientSatisfaction}</div>
              <div className="text-purple-100 text-sm">Satisfaction</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-purple-100 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span>+0.2 from last {timeRange}</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Clock className="h-8 w-8 text-orange-100" />
            <div className="text-right">
              <div className="text-2xl font-bold">{currentData.avgWaitTime}m</div>
              <div className="text-orange-100 text-sm">Avg Wait Time</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-orange-100 text-sm">
            <Activity className="h-4 w-4" />
            <span>-3m from last {timeRange}</span>
          </div>
        </div>
      </div>

      {/* Department Performance */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <BarChart3 className="h-6 w-6 text-purple-600" />
          Department Performance
        </h3>
        
        <div className="space-y-6">
          {currentData.departmentPerformance.map((dept, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">{dept.name}</h4>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-green-600 font-medium">${(dept.revenue / 1000).toFixed(1)}K</span>
                  <span className="text-blue-600 font-medium">{dept.appointments} appointments</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">Appointments</span>
                    <span className="font-medium">{dept.appointments}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(dept.appointments / Math.max(...currentData.departmentPerformance.map(d => d.appointments))) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">Revenue</span>
                    <span className="font-medium">${(dept.revenue / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(dept.revenue / Math.max(...currentData.departmentPerformance.map(d => d.revenue))) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">Satisfaction</span>
                    <span className="font-medium">{dept.satisfaction}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full" 
                      style={{ width: `${(dept.satisfaction / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts and Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Patient Flow Trends</h3>
          <div className="space-y-4">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => {
              const value = Math.floor(Math.random() * 50) + 20;
              return (
                <div key={day} className="flex items-center gap-4">
                  <div className="w-20 text-sm text-gray-600">{day}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full" 
                      style={{ width: `${(value / 70) * 100}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-sm font-medium text-gray-900">{value}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Resource Utilization</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700">Operating Rooms</span>
                <span className="font-medium text-gray-900">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 h-3 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700">Hospital Beds</span>
                <span className="font-medium text-gray-900">72%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700">Medical Equipment</span>
                <span className="font-medium text-gray-900">91%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full" style={{ width: '91%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700">Staff Availability</span>
                <span className="font-medium text-gray-900">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900">Strong Performance</h4>
            </div>
            <p className="text-gray-700 text-sm">
              Patient satisfaction has increased by 8% this month, with cardiology leading the improvement.
            </p>
          </div>

          <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900">Attention Needed</h4>
            </div>
            <p className="text-gray-700 text-sm">
              Emergency department wait times are above target. Consider staffing adjustments during peak hours.
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Target className="h-4 w-4 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900">Opportunity</h4>
            </div>
            <p className="text-gray-700 text-sm">
              Orthopedics department has capacity for 15% more appointments based on current demand patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;