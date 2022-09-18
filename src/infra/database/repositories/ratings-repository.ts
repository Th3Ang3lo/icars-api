import { prismaClient } from '@/infra/database'

import { IRatingsRepository, Rating } from '@/domain/contracts/repositories/ratings-repository'

export class RatingsRepository implements IRatingsRepository {
  public async create (ratingData: Rating): Promise<Rating> {
    const data = await prismaClient.ratings.create({
      data: ratingData
    })

    return data
  }
}
