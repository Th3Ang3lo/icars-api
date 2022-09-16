import { faker } from '@faker-js/faker'

import { UserTypes } from '@/shared/enum/user-types'
import { JwtProvider } from '@/infra/providers/jwt-provider'

import { IJwtProvider } from '@/domain/contracts/providers'

describe('Jwt provider', () => {
  let jwtProviderUser: IJwtProvider
  let jwtProviderPartner: IJwtProvider

  beforeAll(() => {
    process.env.JWT_SECRET_USERS = faker.word.noun()
    process.env.JWT_SECRET_PARTNERS = faker.word.noun()
    process.env.JWT_EXPIRES = '1d'

    jwtProviderUser = new JwtProvider(UserTypes.USER)
    jwtProviderPartner = new JwtProvider(UserTypes.PARTNER)
  })

  it('should generate jwt', async () => {
    const tokenUser = await jwtProviderUser.generateToken({ id: faker.datatype.uuid() })
    const tokenPartner = await jwtProviderPartner.generateToken({ id: faker.datatype.uuid() })

    expect(tokenUser).toBeTruthy()
    expect(tokenPartner).toBeTruthy()
  })

  it('should be valid jwt', async () => {
    const token = await jwtProviderUser.generateToken({ id: faker.datatype.uuid() })

    const isValidJwt = await jwtProviderUser.verifyToken(token)

    expect(token).toBeTruthy()
    expect(isValidJwt).toBeTruthy()
  })

  it('should if jwt can be decoded', async () => {
    const token = await jwtProviderUser.generateToken({ id: faker.datatype.uuid() })
    const decoded = await jwtProviderUser.decodeToken(token)

    expect(decoded).toHaveProperty('id')
  })
})
