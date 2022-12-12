import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../doctors/services/doctors.service';
import { PatientsService } from '../patients/services/patients.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  patientsCount = 0;
  doctorsCount = 0;
  constructor(
    private patientsService: PatientsService,
    private doctorsService: DoctorsService,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.patientsService.fetch().subscribe(res => {
      this.patientsCount = res.length;
    });

    this.doctorsService.fetch().subscribe(res => {
      this.doctorsCount = res.length;
    });
  }
}
