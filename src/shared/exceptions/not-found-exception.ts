import StatusCode from 'status-code-enum'

import { AppError } from './app-error'

export class NotFoundException extends AppError {
  public readonly statusCode = StatusCode.ClientErrorNotFound

  constructor (message?: string) {
    super(message || 'Not Found')
  }
}
