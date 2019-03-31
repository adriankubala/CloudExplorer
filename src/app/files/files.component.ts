import { Component, OnInit, ViewChild } from '@angular/core';

import { FileService } from '../core/file.service';
import { File } from '../shared/file';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  dataSource: File[];

  @ViewChild('filesTable') filesTableRef: MatTable<any>;

  constructor(private readonly fileService: FileService) { }

  ngOnInit() {
    this.fileService.getAll()
      .subscribe(files => {
        this.dataSource = files;
        this.filesTableRef.renderRows();
      });
  }
}
