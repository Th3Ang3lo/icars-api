import { ListRatingsUseCaseOutput } from '@/domain/contracts/usecases/ratings/list-ratings-usecase'

import { IRatingsRepository } from '@/domain/contracts/repositories/ratings-repository'
import { IVehiclesRepository } from '@/domain/contracts/repositories/vehicles-repository'
import { NotFoundException } from '@/shared/exceptions'

export class ListRatingsUseCase {
  constructor (
    private readonly vehiclesRepository: IVehiclesRepository,
    private readonly ratingRepository: IRatingsRepository
  ) { }

  public async execute (vehicleId: number, page: number, limit: number): Promise<ListRatingsUseCaseOutput> {
    const vehicle = await this.vehiclesRepository.findById(vehicleId)

    if (!vehicle) throw new NotFoundException('Veículo inexistente.')

    const { total, data } = await this.ratingRepository.findAll(vehicleId, page - 1, limit)

    return {
      total,
      data
    }
  }
}
