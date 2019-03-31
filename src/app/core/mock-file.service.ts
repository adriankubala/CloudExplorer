import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { File } from '../shared/file';
import { MOCK_FILES } from '../shared/injection-tokens';
import { FileService } from './file.service';

@Injectable({
  providedIn: 'root'
})
export class MockFileService implements FileService {

  constructor(@Inject(MOCK_FILES) private readonly files: File[]) { }

  getAll(): Observable<File[]> {
    return of(this.copyFiles());
  }

  private copyFiles(): File[] {
    return this.files.map(file => this.copyFile(file));
  }

  private copyFile(file: File): File {
    return Object.assign({}, file);
  }
}
