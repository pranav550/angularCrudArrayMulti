import { Employee } from "./../models/employeeModels";
import { FakeData } from "./../dataSource/fakeData";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  
  constructor(private _http: HttpClient) {}

   getEmployee() {
   
  }

  /**function getJson for getting the json data */
  getJson(){
    return this._http.get('./../../assets/dataEntry.json')
  }

}
