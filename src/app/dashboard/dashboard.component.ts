import { Component, OnInit, ViewChild,  } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  toggleVal:boolean = true
  @ViewChild(SideBarComponent, { static: true })
  sideBar: SideBarComponent = new SideBarComponent;
  @ViewChild(HeaderComponent,{static:true}) header : HeaderComponent = new HeaderComponent
  ngOnInit(): void {
  }

  sideBarEvent(toggle:boolean) {
    this.sideBar.toggleSideBar(toggle)
    this.toggleVal = !this.toggleVal
    this.header.toggleValue()
  }
  
}
