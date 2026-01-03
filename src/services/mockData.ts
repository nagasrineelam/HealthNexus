import { Patient, Doctor, Hospital, MedicalRecord, Appointment } from '../types';

export const mockPatients: Patient[] = [
  {
    id: 'p1',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'patient',
    dateOfBirth: '1985-06-15',
    phone: '+1-555-0123',
    address: '123 Main St, City, State',
    emergencyContact: 'Jane Smith +1-555-0124',
    medicalHistory: []
  }
];

export const mockDoctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@hospital.com',
    role: 'doctor',
    specialty: 'Cardiology',
    licenseNumber: 'MD123456',
    experience: 12,
    rating: 4.8,
    availability: [],
    hospitalId: 'h1'
  },
  {
    id: 'd2',
    name: 'Dr. Michael Chen',
    email: 'michael.chen@hospital.com',
    role: 'doctor',
    specialty: 'Neurology',
    licenseNumber: 'MD789012',
    experience: 8,
    rating: 4.9,
    availability: [],
    hospitalId: 'h1'
  },
  {
    id: 'd3',
    name: 'Dr. Emily Davis',
    email: 'emily.davis@hospital.com',
    role: 'doctor',
    specialty: 'Orthopedics',
    licenseNumber: 'MD345678',
    experience: 15,
    rating: 4.7,
    availability: [],
    hospitalId: 'h1'
  },
  {
    id: 'd4',
    name: 'Dr. Robert Wilson',
    email: 'robert.wilson@hospital.com',
    role: 'doctor',
    specialty: 'Dermatology',
    licenseNumber: 'MD901234',
    experience: 10,
    rating: 4.6,
    availability: [],
    hospitalId: 'h2'
  }
];

export const mockHospitals: Hospital[] = [
  {
    id: 'h1',
    name: 'City General Hospital',
    email: 'admin@citygeneral.com',
    role: 'hospital',
    address: '456 Healthcare Ave, Medical District',
    phone: '+1-555-1000',
    departments: ['Cardiology', 'Neurology', 'Orthopedics', 'Emergency'],
    totalDoctors: 25,
    totalPatients: 1500
  },
  {
    id: 'h2',
    name: 'Metro Medical Center',
    email: 'admin@metromedical.com',
    role: 'hospital',
    address: '789 Wellness Blvd, Downtown',
    phone: '+1-555-2000',
    departments: ['Dermatology', 'Pediatrics', 'Psychiatry', 'Surgery'],
    totalDoctors: 18,
    totalPatients: 1200
  }
];

export const mockMedicalRecords: MedicalRecord[] = [
  {
    id: 'mr1',
    patientId: 'p1',
    date: '2024-01-15',
    diagnosis: 'Hypertension',
    symptoms: ['chest pain', 'shortness of breath', 'fatigue'],
    treatment: 'Prescribed ACE inhibitors and lifestyle changes',
    medications: ['Lisinopril 10mg'],
    doctorId: 'd1',
    ipfsHash: 'QmX4f7H2k9L3p1A5B6c7D8e9F0g1H2i3J4k5L6m7N8o9P0q'
  },
  {
    id: 'mr2',
    patientId: 'p1',
    date: '2024-02-20',
    diagnosis: 'Migraine',
    symptoms: ['severe headache', 'nausea', 'light sensitivity'],
    treatment: 'Prescribed pain medication and trigger avoidance',
    medications: ['Sumatriptan 50mg'],
    doctorId: 'd2',
    ipfsHash: 'QmY5g8I3l0M4q2B6C7d8E9f0G1h2I3j4K5l6M7n8O9p0Q1r'
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: 'a1',
    patientId: 'p1',
    doctorId: 'd1',
    hospitalId: 'h1',
    date: '2024-12-20',
    time: '10:00 AM',
    status: 'scheduled',
    type: 'consultation',
    notes: 'Follow-up for hypertension',
    symptoms: ['chest discomfort']
  },
  {
    id: 'a2',
    patientId: 'p1',
    doctorId: 'd2',
    hospitalId: 'h1',
    date: '2024-12-18',
    time: '2:00 PM',
    status: 'completed',
    type: 'follow-up',
    notes: 'Migraine treatment review'
  }
];