import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url: any;
  constructor(private http: HttpClient) {}
  GetemployeeDetails() {
    this.url = 'http://localhost:8080/api/todos';

    return this.http.get(this.url);
  }
}
