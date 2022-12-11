import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { EmployeeByidComponent } from './employee-byid/employee-byid.component';
import { EmployeeAllComponent } from './employee-all/employee-all.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'all',component:EmployeeAllComponent
      },
      {
        path:'byId',component:EmployeeByidComponent
      },{
        path:':id',component:DetailEmployeeComponent

      },

      {
        path:'**',redirectTo:'all'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
