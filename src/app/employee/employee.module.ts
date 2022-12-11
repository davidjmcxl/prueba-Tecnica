import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeAllComponent } from './employee-all/employee-all.component';
import { EmployeeByidComponent } from './employee-byid/employee-byid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EmployeeAllComponent,
    EmployeeByidComponent,
    DetailEmployeeComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class EmployeeModule { }
