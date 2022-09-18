import { Controller, Request, Response } from '@/domain/contracts/controller'

import { ListCategoriesUseCase } from '@/core/usecases/list-categories-usecase'

export class ListCategoriesController implements Controller {
  constructor (
    private readonly listCategoriesUseCase: ListCategoriesUseCase
  ) {}

  public async handle (request: Request): Promise<Response> {
    return await this.listCategoriesUseCase.execute()
  }
}
