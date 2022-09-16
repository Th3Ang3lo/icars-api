export interface IS3StorageProvider {
  saveFile: (file: Express.Multer.File, insidePath?: string) => Promise<string>
}
