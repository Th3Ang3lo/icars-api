import StatusCode from 'status-code-enum'

import { AppError } from './app-error'

export class ConflictException extends AppError {
  public readonly statusCode = StatusCode.ClientErrorConflict

  constructor (message?: string) {
    super(message || 'Conflict')
  }
}
