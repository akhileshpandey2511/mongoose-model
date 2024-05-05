import mongoose from 'mongoose';
import { Hospital } from '../Hospital-Management/hospital.models';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      Ref: 'Hospital',
      required: true,
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
