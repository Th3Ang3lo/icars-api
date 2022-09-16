import StatusCode from 'status-code-enum'
import { AppError } from './app-error'

export class ForbiddenException extends AppError {
  public readonly statusCode = StatusCode.ClientErrorForbidden

  constructor (message?: string) {
    super(message || 'Forbidden')
  }
}
