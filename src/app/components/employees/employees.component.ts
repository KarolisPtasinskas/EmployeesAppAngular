import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService
      .getEmployees()
      .subscribe((employees) => (this.employees = employees));
  }

  deleteEmployee(employee: Employee) {
    this.employeeService
      .deleteEmployee(employee)
      .subscribe(
        () =>
          (this.employees = this.employees.filter((e) => e.id !== employee.id))
      );
  }

  addEmployee(employee: Employee) {
    this.employeeService
      .addEmployee(employee)
      .subscribe((employee) => this.employees.push(employee));
  }
}
