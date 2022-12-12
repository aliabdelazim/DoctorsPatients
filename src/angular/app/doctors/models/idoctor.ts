import { Patient } from '../../patients/models/ipatient';

export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  patients: Patient[];
}
