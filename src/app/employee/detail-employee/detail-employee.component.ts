import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.scss']
})
export class DetailEmployeeComponent implements OnInit {
  detail:any;
  constructor(private activatedRoute:ActivatedRoute ,private empleServices:EmployeesService)  { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id} )=>{
      this.empleServices.getEmployeesByid(id).subscribe((data =>{
        this.detail=data.data;
      }));
    })
  }

}
