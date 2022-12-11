import { Data } from './../interfaces/employee.interfase';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employee-byid',
  templateUrl: './employee-byid.component.html',
  styleUrls: ['./employee-byid.component.scss']
})
export class EmployeeByidComponent implements OnInit {
  idEmpleoyee = this.fb.group({
    id:['']
  });
  data!:Data[];
  constructor(private fb:FormBuilder,private empleServices:EmployeesService) { }

  ngOnInit(): void {


  }

  getId(){
    if(this.idEmpleoyee.value.id==''){
      return;
    }
    this.empleServices.getEmployeesByid(this.idEmpleoyee.value.id!).subscribe(({data}) =>{
      this.data=data;

    });
  }

}
