import { Controller, Request, Response } from '@/domain/contracts/controller'

import { ListVehiclesByCategoryUseCase } from '@/core/usecases/list-vehicles-by-category-usecase'
import { ListAllVehiclesUseCase } from '@/core/usecases/list-all-vehicles-usecase'
export class ListVehiclesController implements Controller {
  constructor (
    private readonly listVehiclesByCategoryUseCase: ListVehiclesByCategoryUseCase,
    private readonly listAllVehiclesUseCase: ListAllVehiclesUseCase
  ) {}

  public async handle (request: Request): Promise<Response> {
    const { categoryId } = request.params

    if (categoryId === 'all') {
      return await this.listAllVehiclesUseCase.execute()
    }

    return await this.listVehiclesByCategoryUseCase.execute(Number(categoryId))
  }
}
