import { Prisma } from '@prisma/client'

export type Rating = Prisma.RatingsUncheckedCreateInput

export interface IRatingsRepository {
  create: (ratingData: Rating) => Promise<Rating>
}
