import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'donate',
        loadChildren: () => import('../donate/donate.module').then(m => m.DonatePageModule)
      },
      {
        path: 'request-aid',
        loadChildren: () => import('../request-aid/request-aid.module').then(m => m.RequestAidPageModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('../schedule/schedule.module').then(m => m.SchedulePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'find-jobs',
        loadChildren: () => import('../find-jobs/find-jobs.module').then( m => m.FindJobsPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
        redirectTo: '/tablinks/home',
        pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
