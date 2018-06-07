import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { ChinausimListComponent } from './chinausim-list/chinausim-list.component';
import { ChinausimDetailComponent } from './chinausim-detail/chinausim-detail.component';
import { ChinausimService } from './chinausim.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [ChinausimListComponent, ChinausimDetailComponent],
  providers: [ChinausimService]
})
export class ChinausimModule { }
