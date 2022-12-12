import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { DoctorsService } from '../services/doctors.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss'],
})
export class EditDoctorComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private doctorsService: DoctorsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getData();
    this.setupForm();
  }

  getData() {
    this.doctorsService
      .fetchById(this.route.snapshot.params['id'])
      .subscribe(res => {
        this.form.controls['firstName'].patchValue(res.firstName);
        this.form.controls['lastName'].patchValue(res.lastName);
        this.form.controls['age'].patchValue(res.age);
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
    });
  }

  update() {
    this.loading = true;
    this.doctorsService
      .update({
        id: this.route.snapshot.params['id'],
        ...this.form.getRawValue(),
      })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(res => {
        this.router.navigateByUrl('/doctors');
      });
  }
}
