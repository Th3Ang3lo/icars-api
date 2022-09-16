import { faker } from '@faker-js/faker'

import { IHashProvider } from '@/domain/contracts/providers/bcrypt-hash-provider'

import { HashProvider } from '@/infra/providers/bcrypt-hash-provider'

describe('Bcrypt Hash Provider', () => {
  let hashProvider: IHashProvider

  beforeAll(() => {
    hashProvider = new HashProvider()
  })

  it('should generate hash', async () => {
    const hashed = await hashProvider.generateHash(faker.word.adjective())

    expect(hashed).toBeTruthy()
  })

  it('should hash can be compared', async () => {
    const plain = faker.word.adjective()
    const hashed = await hashProvider.generateHash(plain)

    const compare = await hashProvider.compareHash(plain, hashed)

    expect(compare).toBeTruthy()
  })
})
