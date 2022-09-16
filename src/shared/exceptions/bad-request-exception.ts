import StatusCode from 'status-code-enum'

import { AppError } from './app-error'

export class BadRequestException extends AppError {
  public readonly statusCode = StatusCode.ClientErrorBadRequest
  public readonly param = undefined

  constructor (message?: string, param?: string) {
    super(message || 'Bad Request')
    this.param = param
  }
}
