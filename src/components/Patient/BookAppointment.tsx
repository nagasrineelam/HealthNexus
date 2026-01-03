import React, { useState } from 'react';
import { MLService } from '../../services/mlService';
import { DoctorRecommendation, MedicalRecord } from '../../types';
import { mockMedicalRecords } from '../../services/mockData';
import { Search, Brain, Calendar, MapPin, Star, Clock, CheckCircle } from 'lucide-react';

const BookAppointment: React.FC = () => {
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [currentSymptom, setCurrentSymptom] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendations, setRecommendations] = useState<DoctorRecommendation[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  const addSymptom = () => {
    if (currentSymptom.trim() && !symptoms.includes(currentSymptom.trim())) {
      setSymptoms([...symptoms, currentSymptom.trim()]);
      setCurrentSymptom('');
    }
  };

  const removeSymptom = (symptom: string) => {
    setSymptoms(symptoms.filter(s => s !== symptom));
  };

  const analyzeSymptoms = async () => {
    if (symptoms.length === 0) return;
    
    setIsAnalyzing(true);
    try {
      // Simulate retrieving medical records from IPFS
      const medicalHistory: MedicalRecord[] = [];
      for (const record of mockMedicalRecords) {
        const retrievedRecord = await MLService.retrieveFromIPFS(record.ipfsHash);
        if (retrievedRecord) {
          medicalHistory.push(retrievedRecord);
        }
      }

      // Get doctor recommendations
      const recs = await MLService.recommendDoctors(symptoms, medicalHistory);
      setRecommendations(recs);
    } catch (error) {
      console.error('Error analyzing symptoms:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const bookAppointment = async (doctorId: string) => {
    setSelectedDoctor(doctorId);
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 1000));
    setAppointmentBooked(true);
  };

  if (appointmentBooked) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appointment Booked!</h2>
          <p className="text-green-700 mb-6">
            Your appointment has been successfully scheduled. You'll receive a confirmation email shortly.
          </p>
          <button
            onClick={() => {
              setAppointmentBooked(false);
              setSymptoms([]);
              setRecommendations([]);
              setSelectedDoctor(null);
            }}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Brain className="h-7 w-7 text-blue-600" />
          AI-Powered Doctor Recommendation
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Describe your symptoms
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={currentSymptom}
                onChange={(e) => setCurrentSymptom(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addSymptom()}
                placeholder="e.g., headache, chest pain, fatigue"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={addSymptom}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                Add
              </button>
            </div>
          </div>

          {symptoms.length > 0 && (
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Current symptoms:</p>
              <div className="flex flex-wrap gap-2">
                {symptoms.map((symptom, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {symptom}
                    <button
                      onClick={() => removeSymptom(symptom)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={analyzeSymptoms}
            disabled={symptoms.length === 0 || isAnalyzing}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Analyzing symptoms & retrieving records...
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                Find Recommended Doctors
              </>
            )}
          </button>
        </div>
      </div>

      {recommendations.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended Doctors</h3>
          <div className="grid gap-6">
            {recommendations.map((rec, index) => (
              <div
                key={rec.doctor.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {rec.doctor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{rec.doctor.name}</h4>
                      <p className="text-blue-600 font-medium">{rec.doctor.specialty}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {rec.doctor.rating}
                        </span>
                        <span>{rec.doctor.experience} years experience</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {rec.hospital.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-2">
                      {Math.round(rec.confidence * 100)}% Match
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Why recommended:</strong> {rec.reasonMatch}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    Next available: Tomorrow 2:00 PM
                  </div>
                  <button
                    onClick={() => bookAppointment(rec.doctor.id)}
                    disabled={selectedDoctor === rec.doctor.id}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center gap-2"
                  >
                    {selectedDoctor === rec.doctor.id ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Booking...
                      </>
                    ) : (
                      <>
                        <Calendar className="h-4 w-4" />
                        Book Appointment
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;