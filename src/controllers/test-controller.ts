import { Controller, Request, Response } from '@/domain/contracts/controller'

import { TestUseCase } from '@/core/usecases/test-usecase'

export class TestController implements Controller {
  constructor (
    private readonly testUseCase: TestUseCase
  ) {}

  public async handle (request: Request): Promise<Response> {
    return await this.testUseCase.execute()
  }
}
