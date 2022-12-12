import { Doctor } from '../../doctors/models/idoctor';

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  doctor: Doctor;
}
