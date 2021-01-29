import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { AdminRoutingModule } from './admin-routing.module';
import { TagComponent } from './tag/tag.component';
import { MatTableModule, MatInputModule, MatPaginatorModule} from '@angular/material';

@NgModule({
  declarations: [MainComponent, TagComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
  ]
})
export class AdminModule { }