import { ListVehiclesUseCaseOutput } from '@/domain/contracts/usecases/list-vehicles-usecase'

import { IVehiclesRepository } from '@/domain/contracts/repositories/vehicles-repository'

export class ListVehiclesByCategoryUseCase {
  constructor (
    private readonly vehiclesRepository: IVehiclesRepository
  ) { }

  public async execute (categoryId: number): Promise<ListVehiclesUseCaseOutput> {
    const data = await this.vehiclesRepository.findByCategory(categoryId)

    return {
      data
    }
  }
}
