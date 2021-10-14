import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../Employee';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  showAddEmployee: boolean = false;
  subscription!: Subscription;

  showEdit: boolean = false;
  employeeToEdit!: Employee;

  constructor(
    private employeeService: EmployeeService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddEmployee = value));
  }

  ngOnInit(): void {
    //
    //Geting all Employees from DB
    //
    this.employeeService
      .getEmployees()
      .subscribe((employees) => (this.employees = employees));
  }

  //
  //Deleting Employee with ID
  //
  deleteEmployee(employee: Employee) {
    this.employeeService
      .deleteEmployee(employee)
      .subscribe(
        () =>
          (this.employees = this.employees.filter((e) => e.id !== employee.id))
      );
  }

  //
  //ADDING Employee
  //
  addEmployee(employee: Employee) {
    this.employeeService
      .addEmployee(employee)
      .subscribe((responceData) => (employee.id = responceData.id));
    this.employees.push(employee);
  }

  //Toggles add form  (show/hide)
  toggleAddEmployee() {
    this.uiService.toggleAddEmployee();
  }

  //
  //EDITING Employee
  //
  toggleEditEmployee(employee: Employee) {
    this.showEdit = !this.showEdit;
    this.employeeToEdit = employee;
  }

  editEmployee(employee: Employee) {
    this.employeeService
      .editEmployee(employee)
      .subscribe(
        () =>
          (this.employees = this.employees.map((e) =>
            e.id !== employee.id ? e : employee
          ))
      );
    this.showEdit = false;
  }
}
