import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, throwError } from "rxjs";
import { environment } from "src/angular/environments/environment";
import { AlertService } from "../alert/alert.service";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient, private alertSrvc: AlertService) {}

  delete<T>(path: string, body = {}) {
    return this.http
      .delete<T>(environment.apiUrl + path, { body })
      .pipe(catchError((error) => this.handleError(error)));
  }

  put<T>(path: string, params = {}) {
    return this.http
      .put<T>(environment.apiUrl + path, params)
      .pipe(catchError((error) => this.handleError(error)));
  }

  post<T>(path: string, params = {}) {
    return this.http
      .post<T>(environment.apiUrl + path, params)
      .pipe(catchError((error) => this.handleError(error)));
  }

  get<T>(path: string, data = {}) {
    const params = new HttpParams({
      fromString: decodeURIComponent(new URLSearchParams(data).toString()),
    });
    return this.http
      .get<T>(environment.apiUrl + path, { params })
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(error: any) {
    if (error.statusCode === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.statusCode);
      this.alertSrvc.showToast({
        severity: "error",
        summary: "Failed! Please try again later.",
        detail: error?.statusCode,
      });
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error?.statusCode}, body was: `,
        error?.statusCode
      );
      this.alertSrvc.showToast({
        severity: "error",
        summary: "Failed!",
        detail: error?.statusCode?.error,
      });
    }
    // Return an observable with a user-facing error message.
    return throwError(() => "Something bad happened; please try again later.");
  }
}
