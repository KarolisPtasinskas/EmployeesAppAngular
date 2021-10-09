import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  @Output() onAddEmployee: EventEmitter<Employee> = new EventEmitter();
  firstName!: string;
  lastName!: string;
  sex: number = 2;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.firstName) {
      alert('Please add first name!');
      return;
    }

    const newEmployee = {
      firstName: this.firstName,
      lastName: this.lastName,
      sex: this.sex,
    };

    this.onAddEmployee.emit(newEmployee);

    this.firstName = '';
    this.lastName = '';
    this.sex = 2;
  }
}
