import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('sideBarEvent') sideBarEvent: EventEmitter<any> = new EventEmitter();
  toggle:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.sideBarEvent.emit(this.toggle);
  }
  toggleValue(){
    this.toggle = !this.toggle
  }

}
