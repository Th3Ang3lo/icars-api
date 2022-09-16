import jwt from 'jsonwebtoken'

import { IJwtProvider } from '@/domain/contracts/providers/jwt-provider'

export class JwtProvider implements IJwtProvider {
  public readonly secret = process.env.JWT_SECRET

  public async generateToken (data: any): Promise<string> {
    return jwt.sign(data, this.secret, {
      expiresIn: process.env.JWT_EXPIRES
    })
  }

  public async decodeToken (token: string): Promise<any> {
    return jwt.decode(token)
  }

  async verifyToken (token: string): Promise<boolean> {
    return !!jwt.verify(token, this.secret)
  }
}
