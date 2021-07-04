import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ActionCardComponent } from './action-card/action-card.component';
import { GraphCardComponent } from './graph-card/graph-card.component';
import { ChartsModule } from 'ng2-charts';
import { LayoutComponent } from './layout/layout.component';
import { StepperComponent } from './layout/stepper/stepper.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableViewComponent } from './table-view/table-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ActionCardComponent,
    GraphCardComponent,
    LayoutComponent,
    StepperComponent,
    LoginPageComponent,
    DashboardComponent,
    TableViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
