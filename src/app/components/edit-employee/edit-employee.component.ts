import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() onEditEmployee: EventEmitter<Employee> = new EventEmitter();

  id: number;
  firstName: string;
  lastName: string;
  sex: string;

  constructor() {}

  ngOnInit(): void {
    this.id = this.employee.id;
    this.firstName = this.employee.firstName;
    this.lastName = this.employee.lastName;
    this.sex = this.employee.sex;
  }

  onSubmit() {
    const editedEmployee = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      sex: this.sex,
    };

    this.onEditEmployee.emit(editedEmployee);

    this.id = undefined;
    this.firstName = '';
    this.lastName = '';
    this.sex = 'Unspecified';
  }
}
