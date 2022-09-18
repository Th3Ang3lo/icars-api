import { Prisma } from '@prisma/client'

export type Category = Prisma.CategoriesUncheckedCreateInput

export interface ICategoriesRepository {
  findAll: () => Promise<Category[]>
}
