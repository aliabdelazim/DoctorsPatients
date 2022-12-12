import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { PatientsEntity } from './patients.entity';
import { DoctorsEntity } from '../doctors/doctors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PatientsEntity, DoctorsEntity])],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
