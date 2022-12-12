import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Doctor } from '../../doctors/models/idoctor';
import { Patient } from '../models/ipatient';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent implements OnInit {
  isLoading = false;
  isRemoving = false;
  patientId: number;
  patientInfo: { [key: string]: any };
  patientDoctor: Doctor;
  constructor(
    private patientsService: PatientsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.patientId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.isLoading = true;
    this.patientsService
      .fetchById(this.patientId)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: Patient) => {
        this.patientInfo = {
          ID: res.id,
          'First Name': res.firstName,
          'Last Name': res.lastName,
          Age: res.age,
        };

        this.patientDoctor = res.doctor;
      });
  }
  remove() {
    this.isRemoving = true;
    this.patientsService
      .delete(this.route.snapshot.params['id'])
      .pipe(finalize(() => (this.isRemoving = false)))
      .subscribe(() => {
        this.router.navigateByUrl('/patients');
      });
  }
}
