import { MedicalRecord, Doctor, DoctorRecommendation } from '../types';
import { mockDoctors, mockHospitals } from './mockData';

export class MLService {
  // Simulate IPFS record retrieval
  static async retrieveFromIPFS(hash: string): Promise<MedicalRecord | null> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(`Retrieving medical record from IPFS: ${hash}`);
    
    // Mock retrieval - in reality, this would fetch from IPFS
    return {
      id: 'retrieved-' + hash.slice(-6),
      patientId: 'current-patient',
      date: new Date().toISOString().split('T')[0],
      diagnosis: 'Previous condition',
      symptoms: ['fatigue', 'pain'],
      treatment: 'Previous treatment',
      medications: ['Previous medication'],
      doctorId: 'previous-doctor',
      ipfsHash: hash
    };
  }

  // Analyze symptoms and medical history to recommend doctors
  static async recommendDoctors(
    symptoms: string[],
    medicalHistory: MedicalRecord[]
  ): Promise<DoctorRecommendation[]> {
    // Simulate ML processing time
    await new Promise(resolve => setTimeout(resolve, 1500));

    const recommendations: DoctorRecommendation[] = [];
    
    // Simple rule-based ML simulation
    const specialtyMapping: Record<string, string[]> = {
      'Cardiology': ['chest pain', 'shortness of breath', 'heart palpitations', 'hypertension', 'fatigue'],
      'Neurology': ['headache', 'dizziness', 'seizures', 'memory loss', 'numbness', 'migraine'],
      'Orthopedics': ['joint pain', 'back pain', 'fracture', 'muscle pain', 'arthritis'],
      'Dermatology': ['rash', 'skin irritation', 'acne', 'moles', 'eczema'],
      'Psychiatry': ['anxiety', 'depression', 'sleep disorders', 'mood swings'],
      'Pediatrics': ['fever in children', 'developmental concerns', 'vaccination']
    };

    // Analyze current symptoms
    for (const [specialty, keywords] of Object.entries(specialtyMapping)) {
      const matchCount = symptoms.filter(symptom => 
        keywords.some(keyword => 
          symptom.toLowerCase().includes(keyword.toLowerCase())
        )
      ).length;

      if (matchCount > 0) {
        const confidence = Math.min(0.9, (matchCount / symptoms.length) * 0.8 + 0.1);
        const doctorsInSpecialty = mockDoctors.filter(d => d.specialty === specialty);
        
        doctorsInSpecialty.forEach(doctor => {
          const hospital = mockHospitals.find(h => h.id === doctor.hospitalId)!;
          recommendations.push({
            doctor,
            confidence,
            reasonMatch: `Symptoms match ${specialty} expertise: ${symptoms.slice(0, 2).join(', ')}`,
            hospital
          });
        });
      }
    }

    // Analyze medical history for patterns
    const historySpecialties = new Set<string>();
    for (const record of medicalHistory) {
      const doctor = mockDoctors.find(d => d.id === record.doctorId);
      if (doctor) {
        historySpecialties.add(doctor.specialty);
      }
    }

    // Boost confidence for doctors in specialties from medical history
    recommendations.forEach(rec => {
      if (historySpecialties.has(rec.doctor.specialty)) {
        rec.confidence = Math.min(0.95, rec.confidence + 0.15);
        rec.reasonMatch += ' (Previous treatment history)';
      }
    });

    // Sort by confidence and rating
    return recommendations
      .sort((a, b) => {
        const confidenceDiff = b.confidence - a.confidence;
        if (Math.abs(confidenceDiff) < 0.1) {
          return b.doctor.rating - a.doctor.rating;
        }
        return confidenceDiff;
      })
      .slice(0, 5); // Return top 5 recommendations
  }

  // Simulate storing new records to IPFS
  static async storeToIPFS(record: Omit<MedicalRecord, 'ipfsHash'>): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Generate mock IPFS hash
    const hash = 'Qm' + Math.random().toString(36).substr(2, 44);
    console.log(`Stored medical record to IPFS: ${hash}`);
    
    return hash;
  }
}