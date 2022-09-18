import { ListCategoriesUseCase } from '@/core/usecases/list-categories-usecase'

import { CategoriesRepository } from '@/infra/database/repositories/categories-repository'

export const listCategoriesUseCase = (): ListCategoriesUseCase => {
  return new ListCategoriesUseCase(
    new CategoriesRepository()
  )
}
