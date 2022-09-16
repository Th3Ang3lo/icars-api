export interface IJwtProvider {
  generateToken: (data: any) => any
  decodeToken: (token: string) => any
  verifyToken: (token: string) => Promise<boolean>
}
