import { mockFiles } from '../shared/mock-files';
import { FileService } from './file.service';
import { MockFileService } from './mock-file.service';

describe('MockFileService', () => {

  let fileService: FileService;

  beforeEach(() => {
    fileService = new MockFileService(mockFiles);
  });

  it('#getAll should return copies of all mock files', () => {
    fileService.getAll().subscribe(files => {
      expect(files).toEqual(mockFiles);
      for (let i = 0; i < files.length; i++) {
        expect(files[i]).not.toBe(mockFiles[i]);
      }
    });
  });
});
