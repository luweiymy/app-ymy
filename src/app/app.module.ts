import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { DisplayDataTestComponent } from './pages/display-data-test/display-data-test.component';
import {DxButtonModule,DxPivotGridModule,DxChartModule,DxSchedulerModule,DxTemplateModule } from 'devextreme-angular';
import { ChartComponent } from './pages/chart/chart.component';
import { SchedulerComponent } from './pages/scheduler/scheduler.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataTestComponent,
    ChartComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    DxButtonModule,
    DxPivotGridModule,
    DxChartModule,
    DxSchedulerModule,
    DxTemplateModule
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
