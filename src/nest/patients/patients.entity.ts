import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { DoctorsEntity } from '../doctors/doctors.entity';

@Entity('patient')
export class PatientsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  firstName: string;

  @Column('text', { nullable: true })
  lastName: string;

  @Column('decimal', { nullable: true })
  age: number;

  @ManyToOne(
    () => DoctorsEntity,
    doctor => doctor.patients,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'patient_id' })
  doctor: DoctorsEntity;
}
