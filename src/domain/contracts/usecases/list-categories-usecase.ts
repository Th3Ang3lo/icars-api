import { Category } from '@/domain/contracts/repositories/categories-repository'

export interface ListCategoriesUseCaseOutput {
  data: Category[]
}
