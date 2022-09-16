import * as bcrypt from 'bcrypt'

import { IHashProvider } from '@/domain/contracts/providers/bcrypt-hash-provider'

export class HashProvider implements IHashProvider {
  async generateHash (plain: string): Promise<string> {
    return await bcrypt.hash(plain, 8)
  }

  async compareHash (plain: string, hashed: string): Promise<boolean> {
    return await bcrypt.compare(plain, hashed)
  }
}
