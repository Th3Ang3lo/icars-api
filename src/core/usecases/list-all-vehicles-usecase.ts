import { ListVehiclesUseCaseOutput } from '@/domain/contracts/usecases/list-vehicles-usecase'

import { IVehiclesRepository } from '@/domain/contracts/repositories/vehicles-repository'

export class ListAllVehiclesUseCase {
  constructor (
    private readonly vehiclesRepository: IVehiclesRepository
  ) { }

  public async execute (): Promise<ListVehiclesUseCaseOutput> {
    const data = await this.vehiclesRepository.findAll()

    return {
      data
    }
  }
}
