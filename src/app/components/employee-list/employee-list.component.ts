import { Employee } from "./../../models/employeeModels";
import { EmployeeService } from "./../../services/employee.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  public Employee: any;
  public Employees: any = [];
  data: any = {};
  newItem: any = {};
  
  
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}

  deleteEmp(employee: Employee) {
    console.log("id", employee.id);

    for (let i = 0; i < this.Employees.length; i++) {
      console.log("employees", this.Employees[i].id);
      if (this.Employees[i].id === employee.id) {
        this.Employees.splice(i, 1);
        console.log(this.Employees, "after");
      }
    }
  }

 

  editEmp(employee: Employee) {
    this.data = employee;
    console.log(this.data, "edit");
  }
  showEmpl(val) {
    console.log(val, "ss");
    this.Employees.push(val);
  }

  editEmpl(val) {
    for (let i = 0; i < this.Employees.length; i++) {
      if (this.Employees[i].id === val.id) {
        this.newItem = val;
        console.log("deeeeeeee", this.newItem);
        console.log("deeeeeeeeccc", this.Employees[i]);
        this.Employees[i] = this.newItem;
      }
    }
  }
}
