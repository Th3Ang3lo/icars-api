import { PostRatingUseCaseOutput } from '@/domain/contracts/usecases/post-rating-usecase'

import { IRatingsRepository, Rating } from '@/domain/contracts/repositories/ratings-repository'
import { IVehiclesRepository } from '@/domain/contracts/repositories/vehicles-repository'
import { NotFoundException } from '@/shared/exceptions'

export class PostRatingUseCase {
  constructor (
    private readonly vehiclesRepository: IVehiclesRepository,
    private readonly ratingRepository: IRatingsRepository
  ) { }

  public async execute (ratingData: Omit<Rating, 'vehicleId'>, vehicleId: number): Promise<PostRatingUseCaseOutput> {
    const vehicle = await this.vehiclesRepository.findById(vehicleId)

    if (!vehicle) throw new NotFoundException('Veículo inexistente.')

    const data = await this.ratingRepository.create({
      ...ratingData,
      vehicleId
    })

    return {
      data
    }
  }
}
