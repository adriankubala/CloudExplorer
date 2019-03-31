import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MOCK_FILES } from '../shared/injection-tokens';
import { mockFiles } from '../shared/mock-files';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: MOCK_FILES, useValue: mockFiles },
  ]
})
export class CoreModule { }
