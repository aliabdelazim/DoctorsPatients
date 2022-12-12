import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from './models/idoctor';
import { ITableCol } from './models/itable-col';
import { DoctorsService } from './services/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  items: Doctor[] = [];
  cols: ITableCol<any>[] = [
    { label: 'First Name', key: 'firstName' },
    { label: 'Last Name', key: 'lastName' },
    {
      label: 'Age',
      key: 'age',
    },
  ];

  dataKey = 'id';
  isLoading = false;
  routeUrl = '';
  constructor(private doctorService: DoctorsService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.doctorService.fetch().subscribe(res => {
      this.items = res;
    });
  }

  navigate(id: number) {
    this.router.navigateByUrl(`doctors/${id}`);
  }
}
