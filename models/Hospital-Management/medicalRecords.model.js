import mongoose from 'mongoose';

const medicalRecordsSchema = new mongoose.Schema(
  {
    patientname: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    diagnosedWith: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    status: {
      type: String,
      ref: true,
    },
    tharapy: {
      type: String,
      req: true,
    },
  },
  { timestamps: true }
);

export const MedicalRecords = mongoose.model(
  'MedicalRecords',
  medicalRecordsSchema
);
