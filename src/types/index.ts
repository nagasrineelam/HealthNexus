export interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'doctor' | 'hospital';
  avatar?: string;
}

export interface Patient extends User {
  role: 'patient';
  dateOfBirth: string;
  phone: string;
  address: string;
  emergencyContact: string;
  medicalHistory: MedicalRecord[];
}

export interface Doctor extends User {
  role: 'doctor';
  specialty: string;
  licenseNumber: string;
  experience: number;
  rating: number;
  availability: TimeSlot[];
  hospitalId: string;
}

export interface Hospital extends User {
  role: 'hospital';
  address: string;
  phone: string;
  departments: string[];
  totalDoctors: number;
  totalPatients: number;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  date: string;
  diagnosis: string;
  symptoms: string[];
  treatment: string;
  medications: string[];
  doctorId: string;
  ipfsHash: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  hospitalId: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  type: 'consultation' | 'follow-up' | 'emergency';
  notes?: string;
  symptoms?: string[];
}

export interface TimeSlot {
  date: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface DoctorRecommendation {
  doctor: Doctor;
  confidence: number;
  reasonMatch: string;
  hospital: Hospital;
}