import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css'],
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee!: Employee;
  @Output() onDeleteEmployee: EventEmitter<Employee> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(employee: Employee) {
    this.onDeleteEmployee.emit(employee);
  }
}
