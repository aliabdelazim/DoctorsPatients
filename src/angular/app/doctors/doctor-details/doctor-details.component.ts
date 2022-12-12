import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, pipe } from 'rxjs';
import { Patient } from '../../patients/models/ipatient';
import { Doctor } from '../models/idoctor';
import { ITableCol } from '../models/itable-col';
import { DoctorsService } from '../services/doctors.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent implements OnInit {
  isLoading = false;
  isRemoving = false;
  doctorInfo: { [key: string]: any };

  doctorPatients: Patient[] = [];
  cols: ITableCol<any>[] = [
    { label: 'First Name', key: 'firstName' },
    { label: 'Last Name', key: 'lastName' },
    {
      label: 'Age',
      key: 'age',
    },
  ];

  dataKey = 'id';
  doctorId: number;
  constructor(
    private doctorService: DoctorsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.doctorId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    this.doctorService
      .fetchById(this.doctorId)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: Doctor) => {
        this.doctorInfo = {
          ID: res.id,
          'First Name': res.firstName,
          'Last Name': res.lastName,
          Age: res.age,
        };

        this.doctorPatients = res.patients;
      });
  }

  remove() {
    this.isRemoving = true;
    this.doctorService
      .delete(this.route.snapshot.params['id'])
      .pipe(finalize(() => (this.isRemoving = false)))
      .subscribe(() => {
        this.router.navigateByUrl('/doctors');
      });
  }
}
