import { IsNotEmpty, IsOptional } from 'class-validator';
export class PatientsDTO {
  id: number;
  firstName: string;
  lastName: string;

  @IsOptional()
  age: number;

  @IsNotEmpty()
  doctorId: number;
}
