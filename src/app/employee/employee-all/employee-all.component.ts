
import { Component, OnInit } from '@angular/core';
import { Data, Employee } from '../interfaces/employee.interfase';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employee-all',
  templateUrl: './employee-all.component.html',
  styleUrls: ['./employee-all.component.scss']
})
export class EmployeeAllComponent implements OnInit {
  data:Data[]=[];
  url:string='';
  constructor(private employeeServices:EmployeesService) { }

  ngOnInit(): void {
    this.employeeServices.getEmployees().subscribe(({data}) =>{
      this.data=data;
    });
  }

}
