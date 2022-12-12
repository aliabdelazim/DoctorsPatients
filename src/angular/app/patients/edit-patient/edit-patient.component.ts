import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Doctor } from '../../doctors/models/idoctor';
import { DoctorsService } from '../../doctors/services/doctors.service';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss'],
})
export class EditPatientComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  loading = false;
  doctors: Doctor[];
  constructor(
    private doctorsService: DoctorsService,
    private patientsService: PatientsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getData();
    this.setupForm();
  }

  getData() {
    this.doctorsService.fetch().subscribe(res => {
      this.doctors = res;
    });

    this.patientsService
      .fetchById(this.route.snapshot.params['id'])
      .subscribe(res => {
        this.form.controls['firstName'].patchValue(res.firstName);
        this.form.controls['lastName'].patchValue(res.lastName);
        this.form.controls['age'].patchValue(res.age);
        this.form.controls['doctor'].patchValue(res.doctor.id);
      });
  }

  setupForm() {
    this.form = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]*$')],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]*$')],
      ],
      age: ['', [Validators.required]],
      doctor: [''],
    });
  }

  update() {
    this.loading = true;
    this.patientsService
      .update({
        id: this.route.snapshot.params['id'],
        ...this.form.getRawValue(),
      })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(res => {
        this.router.navigateByUrl('/patients');
      });
  }
}
