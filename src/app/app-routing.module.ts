import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanActivateGuard} from './core/can-activate.guard';
import { AccueilComponent } from './auth/components/accueil/accueil.component'

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [CanActivateGuard],
    data: { admin: true },
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: 'dash',
    canActivate: [CanActivateGuard],
    loadChildren: () => import('./dash/dash.module').then(mod => mod.DashModule),
  },
  {
    path: '**',
    redirectTo: '/auth/accueil',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
