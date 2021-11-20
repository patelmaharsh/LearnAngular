import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css'],
})
export class EmployeedetailsComponent implements OnInit {
  emp: any;
  constructor(
    private employeeService: EmployeeService,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.GetemployeeDetails();
  }
  GetemployeeDetails() {
    this.SpinnerService.show();

    this.employeeService.GetemployeeDetails().subscribe((data: any) => {
      this.emp = data;
      console.log(this.emp);
      this.SpinnerService.hide();
    });
  }
}
