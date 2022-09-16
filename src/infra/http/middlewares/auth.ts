import { NextFunction, Request, Response } from 'express'

import { JwtProvider } from '@/infra/providers/jwt-provider'

import { UnauthorizedException } from '@/shared/exceptions'

interface ITokenPayload {
  iat: number
  exp: number
  id: string
}

export const authenticated = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  const authHeader = request.headers.authorization

  if (authHeader) {
    const jwtProvider = new JwtProvider()

    const [Bearer, token, ...rest] = authHeader.split(' ')

    try {
      if (Bearer !== 'Bearer' || rest.length > 0) {
        throw new Error()
      }

      const verify = await jwtProvider.verifyToken(token)

      if (verify) {
        const decoded = await jwtProvider.decodeToken(token)
        const { id } = decoded as ITokenPayload

        request.user = {
          id
        }

        return next()
      } else {
        throw new Error()
      }
    } catch (err) {
      response.status(401).json(new UnauthorizedException('Jwt token invalid.'))
    }
  } else {
    response.status(401).json(new UnauthorizedException('Jwt token is missing.'))
  }
}
