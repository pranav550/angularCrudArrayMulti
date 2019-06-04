import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

const routes: Routes = [
  {path: '', redirectTo: '/employeeList', pathMatch: 'full'},
  {path: 'employeeList', component: EmployeeListComponent },
  {path:"addEmployee", component:AddEmployeeComponent},
  {path:"editEmployee", component:EditEmployeeComponent},
  {path:"**", component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
