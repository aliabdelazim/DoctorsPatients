import { Injectable } from '@angular/core';
import { first, map } from 'rxjs';
import { environment } from 'src/angular/environments/environment';
import { ApiService } from '../../@shared/services/api/api.service';
import { Patient } from '../models/ipatient';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  apiRoute = '/patient';
  constructor(private apiSrvc: ApiService) {}

  fetch(params = {}) {
    return this.apiSrvc
      .get<{ statusCode: number; data: Patient[] }>(this.apiRoute, {
        ...params,
      })
      .pipe(
        first(),
        map(res => res.data),
      );
  }

  create(data: Patient) {
    return this.apiSrvc
      .post<{ statusCode: number; data: Patient }>(this.apiRoute, data)
      .pipe(
        first(),
        map(res => res.data),
      );
  }

  update(data: Patient) {
    return this.apiSrvc
      .put<{ statusCode: number; data: Patient }>(
        `${this.apiRoute}/${data.id}`,
        data,
      )
      .pipe(
        first(),
        map(res => res.data),
      );
  }

  fetchById(id: string | number) {
    return this.apiSrvc
      .get<{ statusCode: number; data: Patient }>(`${this.apiRoute}/${id}`)
      .pipe(
        first(),
        map(res => res.data),
      );
  }

  delete(id: number) {
    return this.apiSrvc.delete<boolean>(`${this.apiRoute}/${id}`).pipe(first());
  }
}
