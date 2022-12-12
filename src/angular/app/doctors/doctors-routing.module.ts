import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorsComponent } from './doctors.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsComponent,
  },
  {
    path: 'create',
    component: CreateDoctorComponent,
  },
  {
    path: ':id/edit',
    component: EditDoctorComponent,
  },
  {
    path: 'edit/:id',
    redirectTo: ':id/edit',
  },
  {
    path: ':id',
    component: DoctorDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
