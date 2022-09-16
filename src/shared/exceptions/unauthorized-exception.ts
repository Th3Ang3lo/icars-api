import StatusCode from 'status-code-enum'

import { AppError } from './app-error'

export class UnauthorizedException extends AppError {
  public readonly statusCode = StatusCode.ClientErrorUnauthorized

  constructor (message?: string) {
    super(message || 'Unauthorized')
  }
}
