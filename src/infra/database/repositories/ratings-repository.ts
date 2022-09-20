import { prismaClient } from '@/infra/database'

import { IRatingsRepository, Rating, ListRating } from '@/domain/contracts/repositories/ratings-repository'

export class RatingsRepository implements IRatingsRepository {
  public async create (ratingData: Rating): Promise<Rating> {
    const data = await prismaClient.ratings.create({
      data: ratingData
    })

    return data
  }

  public async findAll (vehicleId: number, page: number, limit: number): Promise<ListRating> {
    const data = await prismaClient.$transaction([
      prismaClient.ratings.count({
        where: {
          vehicleId
        }
      }),
      prismaClient.ratings.findMany({
        skip: page,
        take: limit,
        where: {
          vehicleId
        }
      })
    ])

    return {
      total: data[0],
      data: data[1]
    }
  }
}
