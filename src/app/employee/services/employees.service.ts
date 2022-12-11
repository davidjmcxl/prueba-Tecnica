import { Employee } from './../interfaces/employee.interfase';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  url:string = environment.baseUrl;
  constructor(private http:HttpClient) { }
  getEmployees():Observable<Employee>{
    return this.http.get<Employee>(`${this.url}/all`);
  }
  getEmployeesByid(id:string):Observable<Employee>{
    return this.http.get<Employee>(`${this.url}/${id}`);
  }

}
