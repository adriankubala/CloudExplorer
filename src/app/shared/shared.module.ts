import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  declarations: [DropZoneDirective, FileUploadComponent, FileSizePipe],
  exports: [FileUploadComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
