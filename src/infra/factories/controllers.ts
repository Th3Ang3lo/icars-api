import { Response } from '@/domain/contracts/controller'
import { controllerAdapter as adapter } from '@/infra/http/adapters/controller'

import { ListCategoriesController } from '@/controllers/list-categories-controller'

import {
  listCategoriesUseCase
} from './usecases'

export const listCategoriesController: Response = () => {
  return adapter(
    new ListCategoriesController(
      listCategoriesUseCase()
    )
  )
}
