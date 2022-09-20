import { Prisma } from '@prisma/client'

export type Rating = Prisma.RatingsUncheckedCreateInput
export interface ListRating {
  total: number
  data: Rating[]
}

export interface IRatingsRepository {
  create: (ratingData: Rating) => Promise<Rating>
  findAll: (vehicleId: number, page: number, limit: number) => Promise<ListRating>
}
