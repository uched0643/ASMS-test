import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { StatusReviewComponent } from './status-review/status-review.component'
import {MatExpansionModule} from '@angular/material/expansion';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartComponent } from './chart/chart.component';
import { MatDividerModule } from '@angular/material/divider';
import { FiveComponent } from './five/five.component';
import { ScheduleComponent } from "./schedule/schedule.component";
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    StatusReviewComponent,
    ChartComponent,
    FiveComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatBadgeModule,
    MatExpansionModule,
    GoogleChartsModule,
    MatDividerModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
