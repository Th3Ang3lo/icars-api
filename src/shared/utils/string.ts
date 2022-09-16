import crypto from 'crypto'

export const randomString = (length = 32): string => {
  return crypto.randomBytes(length).toString('hex')
}
