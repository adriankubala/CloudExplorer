import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { FilesComponent } from './files.component';

@NgModule({
  declarations: [FilesComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
  ]
})
export class FilesModule { }
