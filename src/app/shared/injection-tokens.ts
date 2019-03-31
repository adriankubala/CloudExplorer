import { InjectionToken } from '@angular/core';

import { File } from './file';
import { mockFiles } from './mock-files';

export const MOCK_FILES = new InjectionToken<File[]>('Mock files', {
  factory: () => mockFiles
});
