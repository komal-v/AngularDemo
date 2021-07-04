import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router:Router) { }
  username:any = 'admin';
  password:any = 'admin';
  errmsg = '';
  ngOnInit(): void {
  }

  login(){
    console.log(this.username + ' ---- ' + this.password)
    if(this.username == 'admin' && this.password == 'admin'){
      this.errmsg = ''
      this.router.navigate(['/dashboard'])
    }
    else{
      this.errmsg = 'Enter correct username and password.'
    }
  }

}
