import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../Employee';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  @Output() onAddEmployee: EventEmitter<Employee> = new EventEmitter();
  firstName: string = '';
  lastName: string = '';
  sex: string = 'Unspecified';

  showAddEmployee: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddEmployee = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.firstName) {
      alert('Please add first name!');
      return;
    }

    const newEmployee = {
      id: undefined,
      firstName: this.firstName,
      lastName: this.lastName,
      sex: this.sex,
    };

    this.onAddEmployee.emit(newEmployee);

    this.firstName = '';
    this.lastName = '';
    this.sex = 'Unspecified';
  }
}
