import { Injectable } from '@angular/core';

import { first, map } from 'rxjs';
import { ApiService } from '../../@shared/services/api/api.service';
import { Doctor } from '../models/idoctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  apiRoute = '/doctor';
  constructor(private apiSrvc: ApiService) {}

  fetch(params = {}) {
    return this.apiSrvc
      .get<{ statusCode: number; data: Doctor[] }>(this.apiRoute, {
        ...params,
      })
      .pipe(
        first(),
        map(res => res.data),
      );
  }

  create(data: Doctor) {
    return this.apiSrvc
      .post<{ statusCode: number; data: Doctor }>(this.apiRoute, data)
      .pipe(
        first(),
        map(res => res.data),
      );
  }

  update(data: Doctor) {
    return this.apiSrvc
      .put<{ statusCode: number; data: Doctor }>(
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
      .get<{ statusCode: number; data: Doctor }>(`${this.apiRoute}/${id}`)
      .pipe(
        first(),
        map(res => res.data),
      );
  }

  delete(id: number) {
    return this.apiSrvc.delete<boolean>(`${this.apiRoute}/${id}`).pipe(first());
  }
}
