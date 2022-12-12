import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITableCol } from '../doctors/models/itable-col';
import { PatientsService } from './services/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  items: any[] = [];
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
  constructor(
    private patientsService: PatientsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.patientsService.fetch().subscribe(res => {
      this.items = res;
    });
  }

  navigate(id: number) {
    this.router.navigateByUrl(`patients/${id}`);
  }
}
