import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PatientsEntity } from './patients.entity';
import { PatientsDTO } from './patients.dto';
import { DoctorsEntity } from '../doctors/doctors.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(PatientsEntity)
    private patientsRepository: Repository<PatientsEntity>,
    @InjectRepository(DoctorsEntity)
    private doctorsRepository: Repository<DoctorsEntity>,
  ) {}

  async showAll() {
    return await this.patientsRepository.find();
  }

  async create(data: PatientsDTO) {
    const patientDoctor = await this.doctorsRepository.findOne(data.doctorId);
    const patient = this.patientsRepository.create(data);
    patient.doctor = patientDoctor as DoctorsEntity;
    await this.patientsRepository.save(patient);
    return patient;
  }

  async read(id: number) {
    return await this.patientsRepository
      .createQueryBuilder('patient')
      .where('patient.id = :id', { id: id })
      .leftJoinAndSelect('patient.doctor', 'doctor')
      .getOne();
  }

  async update(id: number, data: Partial<PatientsDTO>) {
    await this.patientsRepository.update({ id }, data);
    return await this.patientsRepository.findOne({ id });
  }

  async destroy(id: number) {
    await this.patientsRepository.delete({ id });
    return { deleted: true };
  }
}
