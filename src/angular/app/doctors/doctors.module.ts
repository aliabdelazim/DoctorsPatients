import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../@shared/@shared.module';

@NgModule({
  declarations: [
    DoctorsComponent,
    CreateDoctorComponent,
    DoctorDetailsComponent,
    EditDoctorComponent,
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    TableModule,
    ButtonModule,
    SkeletonModule,
  ],
})
export class DoctorsModule {}
