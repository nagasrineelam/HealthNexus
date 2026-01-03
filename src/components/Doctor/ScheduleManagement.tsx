import React, { useState } from 'react';
import { Calendar, Clock, Plus, Edit, Trash2, Users, CheckCircle } from 'lucide-react';

const ScheduleManagement: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showAddSlot, setShowAddSlot] = useState(false);

  const timeSlots = [
    { id: '1', time: '09:00 AM', duration: 30, patient: 'John Smith', type: 'consultation', status: 'confirmed' },
    { id: '2', time: '09:30 AM', duration: 30, patient: null, type: 'available', status: 'available' },
    { id: '3', time: '10:00 AM', duration: 60, patient: 'Mary Johnson', type: 'follow-up', status: 'confirmed' },
    { id: '4', time: '11:00 AM', duration: 30, patient: null, type: 'available', status: 'available' },
    { id: '5', time: '11:30 AM', duration: 30, patient: 'Robert Davis', type: 'check-up', status: 'pending' },
    { id: '6', time: '02:00 PM', duration: 45, patient: 'Lisa Wilson', type: 'emergency', status: 'confirmed' },
    { id: '7', time: '02:45 PM', duration: 30, patient: null, type: 'available', status: 'available' },
    { id: '8', time: '03:15 PM', duration: 30, patient: 'David Brown', type: 'consultation', status: 'confirmed' },
  ];

  const getSlotColor = (slot: any) => {
    if (slot.status === 'available') return 'bg-green-50 border-green-200 text-green-800';
    if (slot.status === 'confirmed') return 'bg-blue-50 border-blue-200 text-blue-800';
    if (slot.status === 'pending') return 'bg-yellow-50 border-yellow-200 text-yellow-800';
    return 'bg-gray-50 border-gray-200 text-gray-800';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'available':
        return <Plus className="h-4 w-4 text-green-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Schedule Management</h2>
          <p className="text-gray-600">Manage your availability and appointments</p>
        </div>
        
        <div className="flex gap-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={() => setShowAddSlot(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            <Plus className="h-4 w-4" />
            Add Slot
          </button>
        </div>
      </div>

      {/* Schedule Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Slots</p>
              <p className="text-2xl font-bold">{timeSlots.length}</p>
            </div>
            <Calendar className="h-8 w-8 text-blue-100" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Available</p>
              <p className="text-2xl font-bold">{timeSlots.filter(s => s.status === 'available').length}</p>
            </div>
            <Plus className="h-8 w-8 text-green-100" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Booked</p>
              <p className="text-2xl font-bold">{timeSlots.filter(s => s.status === 'confirmed').length}</p>
            </div>
            <Users className="h-8 w-8 text-purple-100" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Pending</p>
              <p className="text-2xl font-bold">{timeSlots.filter(s => s.status === 'pending').length}</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-100" />
          </div>
        </div>
      </div>

      {/* Time Slots */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Schedule for {new Date(selectedDate).toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </h3>
        
        <div className="grid gap-4">
          {timeSlots.map((slot) => (
            <div 
              key={slot.id} 
              className={`border-2 rounded-xl p-4 transition-all hover:shadow-md ${getSlotColor(slot)}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(slot.status)}
                    <span className="font-semibold">{slot.time}</span>
                    <span className="text-sm text-gray-600">({slot.duration} min)</span>
                  </div>
                  
                  {slot.patient ? (
                    <div>
                      <p className="font-medium">{slot.patient}</p>
                      <p className="text-sm text-gray-600 capitalize">{slot.type}</p>
                    </div>
                  ) : (
                    <div>
                      <p className="font-medium text-green-600">Available Slot</p>
                      <p className="text-sm text-gray-600">Ready for booking</p>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Slot Modal */}
      {showAddSlot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Add Time Slot</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                <input
                  type="time"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration (minutes)</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">60 minutes</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Appointment Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="consultation">Consultation</option>
                  <option value="follow-up">Follow-up</option>
                  <option value="check-up">Check-up</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddSlot(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAddSlot(false)}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                Add Slot
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleManagement;