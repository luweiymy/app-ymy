import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DisplayDataTestComponent } from './pages/display-data-test/display-data-test.component';
import { DxDataGridModule, DxFormModule} from 'devextreme-angular';
import { ChartComponent } from './pages/chart/chart.component';
import { SchedulerComponent } from './pages/scheduler/scheduler.component';


const routes: Routes = [
  {
    path: 'display-data',
    component: DisplayDataComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'display-data-test',
    component: DisplayDataTestComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'chart',
    component: ChartComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'scheduler',
    component: SchedulerComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent]
})
export class AppRoutingModule { }
