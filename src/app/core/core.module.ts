import { NgModule } from '@angular/core';

import { FileService } from './file.service';
import { MockFileService } from './mock-file.service';

@NgModule({
  providers: [
    { provide: FileService, useClass: MockFileService },
  ]
})
export class CoreModule { }
