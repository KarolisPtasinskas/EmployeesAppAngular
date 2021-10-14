import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './components/about/about.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

const appRoutes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeItemComponent,
    AddEmployeeComponent,
    ButtonComponent,
    AboutComponent,
    EditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
