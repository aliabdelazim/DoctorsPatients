import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientsComponent } from './patients.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent,
  },
  {
    path: 'create',
    component: CreatePatientComponent,
  },
  {
    path: ':id/edit',
    component: EditPatientComponent,
  },
  {
    path: 'edit/:id',
    redirectTo: ':id/edit',
  },
  {
    path: ':id',
    component: PatientDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
