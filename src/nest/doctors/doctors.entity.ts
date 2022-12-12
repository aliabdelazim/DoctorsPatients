import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PatientsEntity } from '../patients/patients.entity';

@Entity('doctor')
export class DoctorsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  firstName: string;

  @Column('text', { nullable: true })
  lastName: string;

  @Column('decimal', { nullable: true })
  age: number;

  @OneToMany(
    () => PatientsEntity,
    patient => patient.doctor,
  )
  patients: PatientsEntity[];
}
