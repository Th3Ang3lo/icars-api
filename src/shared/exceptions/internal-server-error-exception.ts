import StatusCode from 'status-code-enum'

import { AppError } from './app-error'

export class InternalServerErrorException extends AppError {
  public readonly statusCode = StatusCode.ServerErrorInternal

  constructor (message?: string) {
    super(message || 'Houve um erro interno, tente novamente mais tarde.')
  }
}
