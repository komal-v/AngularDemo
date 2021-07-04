import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isPrimary: boolean = true
  isSecondary: boolean = true
  show: boolean = true
  constructor() { }
  ngOnInit(): void {
  }
  toggleSideBar(toggle: boolean) {
    if (!toggle) {
      this.isPrimary = true
      this.isSecondary = true
      this.show = true
    }
    else {
      this.isPrimary = false
      this.isSecondary = false
      this.show = false
    }
    toggle = !toggle
  }

}
