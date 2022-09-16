export interface IHashProvider {
  generateHash: (plain: string) => Promise<string>
  compareHash: (plain: string, hashed: string) => Promise<boolean>
}
