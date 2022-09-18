import { ListCategoriesUseCaseOutput } from '@/domain/contracts/usecases/list-categories-usecase'

import { ICategoriesRepository } from '@/domain/contracts/repositories/categories-repository'

export class ListCategoriesUseCase {
  constructor (
    private readonly categoriesRepository: ICategoriesRepository
  ) { }

  public async execute (): Promise<ListCategoriesUseCaseOutput> {
    const data = await this.categoriesRepository.findAll()

    return {
      data
    }
  }
}
