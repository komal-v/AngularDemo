import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/assets/Models/Employee.model';
import * as EmployeeList from '../../assets/JSON/EmployeeData.json';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  constructor() { }

  EmployeeData:any[] = (EmployeeList);
  employees:Employee[] = []

  ngOnInit(): void {
    for(let i=0;i<this.EmployeeData.length;i++){
      let e = new Employee()
      e.id = this.EmployeeData[i].id;
      e.name = this.EmployeeData[i].name;
      e.country = this.EmployeeData[i].liveLocation;
      e.email = this.EmployeeData[i].email;
      e.creditBalance = this.EmployeeData[i].creditBalance;
      this.employees.push(e)
    }
    console.log(this.EmployeeData)
  }

}
