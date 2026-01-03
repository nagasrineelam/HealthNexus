import React, { useState } from 'react';
import { Users, Search, Calendar, FileText, Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-react';

const PatientManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);

  const patients = [
    {
      id: 'p1',
      name: 'John Smith',
      age: 45,
      phone: '+1-555-0123',
      email: 'john@example.com',
      lastVisit: '2024-12-15',
      nextAppointment: '2024-12-20',
      condition: 'Hypertension',
      status: 'stable',
      riskLevel: 'low',
      medications: ['Lisinopril 10mg', 'Metformin 500mg'],
      recentVitals: {
        bloodPressure: '130/85',
        heartRate: '72 bpm',
        temperature: '98.6°F',
        weight: '180 lbs'
      }
    },
    {
      id: 'p2',
      name: 'Mary Johnson',
      age: 32,
      phone: '+1-555-0124',
      email: 'mary@example.com',
      lastVisit: '2024-12-14',
      nextAppointment: '2024-12-22',
      condition: 'Diabetes Type 2',
      status: 'monitoring',
      riskLevel: 'medium',
      medications: ['Metformin 1000mg', 'Insulin'],
      recentVitals: {
        bloodPressure: '125/80',
        heartRate: '68 bpm',
        temperature: '98.4°F',
        weight: '165 lbs'
      }
    },
    {
      id: 'p3',
      name: 'Robert Davis',
      age: 58,
      phone: '+1-555-0125',
      email: 'robert@example.com',
      lastVisit: '2024-12-13',
      nextAppointment: '2024-12-25',
      condition: 'Arthritis',
      status: 'improving',
      riskLevel: 'low',
      medications: ['Ibuprofen 400mg', 'Glucosamine'],
      recentVitals: {
        bloodPressure: '120/75',
        heartRate: '75 bpm',
        temperature: '98.2°F',
        weight: '195 lbs'
      }
    }
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedPatientData = selectedPatient 
    ? patients.find(p => p.id === selectedPatient)
    : null;

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'bg-green-100 text-green-800';
      case 'monitoring': return 'bg-yellow-100 text-yellow-800';
      case 'improving': return 'bg-blue-100 text-blue-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Patient Management</h2>
          <p className="text-gray-600">Monitor and manage your patient care</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
            Add Patient
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredPatients.map((patient) => (
            <div 
              key={patient.id} 
              className={`bg-white rounded-2xl shadow-sm border p-6 cursor-pointer transition-all hover:shadow-md ${
                selectedPatient === patient.id ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-100'
              }`}
              onClick={() => setSelectedPatient(patient.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                      <span className="text-gray-500 text-sm">Age {patient.age}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>{patient.condition}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Last: {patient.lastVisit}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Next: {patient.nextAppointment}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>{patient.phone}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                        {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                      </span>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(patient.riskLevel)}`}>
                        {patient.riskLevel.charAt(0).toUpperCase() + patient.riskLevel.slice(1)} Risk
                      </span>
                    </div>
                  </div>
                </div>
                
                {patient.riskLevel === 'medium' || patient.riskLevel === 'high' ? (
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                ) : null}
              </div>
            </div>
          ))}
          
          {filteredPatients.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No patients found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </div>

        {/* Patient Details */}
        <div className="lg:col-span-1">
          {selectedPatientData ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Patient Details</h3>
                <button 
                  onClick={() => setSelectedPatient(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                    {selectedPatientData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="font-semibold text-gray-900">{selectedPatientData.name}</h4>
                  <p className="text-gray-600 text-sm">Age {selectedPatientData.age}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>{selectedPatientData.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span>{selectedPatientData.email}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Recent Vitals</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <div className="text-blue-600 font-medium">BP</div>
                      <div className="text-gray-900">{selectedPatientData.recentVitals.bloodPressure}</div>
                    </div>
                    <div className="p-2 bg-green-50 rounded-lg">
                      <div className="text-green-600 font-medium">HR</div>
                      <div className="text-gray-900">{selectedPatientData.recentVitals.heartRate}</div>
                    </div>
                    <div className="p-2 bg-orange-50 rounded-lg">
                      <div className="text-orange-600 font-medium">Temp</div>
                      <div className="text-gray-900">{selectedPatientData.recentVitals.temperature}</div>
                    </div>
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <div className="text-purple-600 font-medium">Weight</div>
                      <div className="text-gray-900">{selectedPatientData.recentVitals.weight}</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Current Medications</h4>
                  <div className="space-y-2">
                    {selectedPatientData.medications.map((medication, index) => (
                      <div key={index} className="p-2 bg-green-50 rounded-lg">
                        <span className="text-sm text-green-800 font-medium">{medication}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm">
                    Schedule
                  </button>
                  <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-sm">
                    Records
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Patient</h3>
              <p className="text-gray-600 text-sm">Click on any patient to view detailed information</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientManagement;