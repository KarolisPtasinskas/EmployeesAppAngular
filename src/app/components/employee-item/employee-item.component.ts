import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css'],
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee!: Employee;
  @Output() onDeleteEmployee: EventEmitter<Employee> = new EventEmitter();
  @Output() showEditEmployee: EventEmitter<Employee> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(employee: Employee) {
    this.onDeleteEmployee.emit(employee);
  }

  onEdit(employee: Employee) {
    console.log('Employee-item (onEdit): ', employee);
    this.showEditEmployee.emit(employee);
  }
}
