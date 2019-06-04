import { EmployeeService } from "./../../services/employee.service";
import { Component, OnInit, Output, EventEmitter, ElementRef, HostListener, } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";
declare var $: any;
@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.css"]
})
export class AddEmployeeComponent implements OnInit {
  addData: any;
  allData: any = [];
  addForm: FormGroup;
  btnvisibility: boolean = true;
  IsmodelShow = false;
  display: "none";
  categories = ["Angular", "Node", "React", "D3"];
  @Output() selectData = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder, private router: Router , private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
 
      
      if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
 
        
        this.addForm.reset(); 
      }
  }


  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
      employee_name: [
        "",
        [Validators.required, Validators.pattern("^[a-zA-Z]+$")]
      ],
      employee_salary: [
        "",
        [Validators.required, Validators.pattern("^[0-9]+$")]
      ],
      employee_age: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
      employee_phoneno: [
        "",
        [Validators.required, Validators.pattern("^[0-9]+$")]
      ],
      employee_address: ["", Validators.required],
      employee_gender: ["", Validators.required],
      employee_category: ["", Validators.required]
    });
  }
  

  onSubmit() {
    console.log(this.addForm.controls, "Form");
    console.log(this.addForm.value, "ddddddddd");
    this.addData = this.addForm.value;
    console.log(this.addData, "mydata");
    this.onSelectData();
    //  localStorage.setItem('empData', JSON.stringify(this.addData));

    this.addForm.reset();

    $("#exampleModal").modal("toggle");
  }

  closeModal(){
    this.addForm.reset(); 
   }
  

  onSelectData() {
    this.selectData.emit(this.addData);
  }
}
