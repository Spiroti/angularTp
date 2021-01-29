import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TagComponent } from './tag/tag.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent,
  },
  {
    path: '**',
    redirectTo: 'main'
  },
  {
    path: 'tag', component: TagComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }