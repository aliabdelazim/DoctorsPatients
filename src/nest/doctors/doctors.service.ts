import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DoctorsEntity } from './doctors.entity';
import { DoctorsDTO } from './doctors.dto';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(DoctorsEntity)
    private doctorsRepository: Repository<DoctorsEntity>,
  ) {}

  async showAll() {
    return await this.doctorsRepository
      .createQueryBuilder('doctor')
      .leftJoinAndSelect('doctor.patients', 'patient')
      .getMany();
  }

  async create(data: DoctorsDTO) {
    const doctor = this.doctorsRepository.create(data);
    await this.doctorsRepository.save(data);
    return doctor;
  }

  async read(id: number) {
    return await this.doctorsRepository
      .createQueryBuilder('doctor')
      .where('doctor.id = :id', { id: id })
      .leftJoinAndSelect('doctor.patients', 'patient')
      .getOne();
  }

  async update(id: number, data: Partial<DoctorsDTO>) {
    await this.doctorsRepository.update({ id }, data);
    return await this.doctorsRepository.findOne({ id });
  }

  async destroy(id: number) {
    await this.doctorsRepository.delete({ id });
    return { deleted: true };
  }
}
