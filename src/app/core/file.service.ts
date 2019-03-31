import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { File } from '../shared/file';

@Injectable({
  providedIn: 'root'
})
export abstract class FileService {

  abstract getAll(): Observable<File[]>;
}
