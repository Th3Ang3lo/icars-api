import { Controller, Request, Response } from '@/domain/contracts/controller'

import { ListVehiclesUseCase } from '@/core/usecases/list-vehicles-usecase'

export class ListVehiclesController implements Controller {
  constructor (
    private readonly listVehiclesUseCase: ListVehiclesUseCase
  ) {}

  public async handle (request: Request): Promise<Response> {
    const { categoryId } = request.params

    return await this.listVehiclesUseCase.execute(Number(categoryId))
  }
}
