import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [TypeOrmModule.forRoot(), DoctorsModule, PatientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
