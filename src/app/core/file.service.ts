import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class FileService {

  abstract getAll(): Observable<any[]>;
}
