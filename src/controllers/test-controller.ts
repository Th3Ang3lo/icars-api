import { Controller, Request, Response } from '@/domain/contracts/presentation/controller'

export class TestController implements Controller {
  constructor (
    private readonly testUseCase: any
  ) {}

  public async handle: (request: Request) => Promise<Response> {

  }
}
