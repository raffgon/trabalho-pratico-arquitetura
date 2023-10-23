/**
 * Represents a loader for a specific file type.
 */
export default class Loader {

  constructor(fileType) {
    this.fileType = fileType;
  }

  load(filePath) {
    throw new Error('Method not implemented.');
  }

  supportsFile(fileType) {
    return fileType === this.fileType;
  }
}