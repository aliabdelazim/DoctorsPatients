import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { finalize } from "rxjs";

import { Doctor } from "../../doctors/models/idoctor";
import { ITableCol } from "../../doctors/models/itable-col";
import { DoctorsService } from "../../doctors/services/doctors.service";
import { PatientsService } from "../services/patients.service";
import { AlertService } from "../../@shared/services/alert/alert.service";

@Component({
  selector: "app-create-patient",
  templateUrl: "./create-patient.component.html",
  styleUrls: ["./create-patient.component.scss"],
})
export class CreatePatientComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  loading = false;

  doctors: Doctor[];

  constructor(
    private patientsService: PatientsService,
    private doctorsService: DoctorsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.setupForm();
    this.getData();
  }

  getData() {
    this.doctorsService.fetch().subscribe((res) => {
      this.doctors = res;
    });
  }

  setupForm() {
    this.form = this.formBuilder.group({
      firstName: [
        "",
        [Validators.required, Validators.pattern("[a-zA-Z0-9]*$")],
      ],
      lastName: [
        "",
        [Validators.required, Validators.pattern("[a-zA-Z0-9]*$")],
      ],
      age: ["", [Validators.required]],
      doctor: [""],
    });
  }

  submit() {
    this.loading = true;
    this.patientsService
      .create(this.form.getRawValue())
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((res) => {
        this.alertService.showToast({
          severity: "success",
          summary: "Patient Added",
        });
        this.router.navigateByUrl("/patients");
      });
  }
}
