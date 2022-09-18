import { prismaClient } from '@/infra/database'

import { ICategoriesRepository, Category } from '@/domain/contracts/repositories/categories-repository'

export class CategoriesRepository implements ICategoriesRepository {
  public async findAll (): Promise<Category[]> {
    const data = await prismaClient.categories.findMany()

    return data
  }
}
