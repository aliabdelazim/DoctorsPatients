import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { finalize } from "rxjs";
import { DoctorsService } from "../services/doctors.service";
import { AlertService } from "../../@shared/services/alert/alert.service";

@Component({
  selector: "app-create-doctor",
  templateUrl: "./create-doctor.component.html",
  styleUrls: ["./create-doctor.component.scss"],
})
export class CreateDoctorComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorsService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.setupForm();
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
    });
  }

  submit() {
    this.loading = true;
    this.doctorService
      .create(this.form.getRawValue())
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((res) => {
        this.alertService.showToast({
          severity: "success",
          summary: "Doctor Added",
        });
        this.router.navigateByUrl("/doctors");
      });
  }
}
