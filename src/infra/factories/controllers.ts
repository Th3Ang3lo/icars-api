import { Response } from '@/domain/contracts/controller'
import { controllerAdapter as adapter } from '@/infra/http/adapters/controller'

import { ListCategoriesController } from '@/controllers/list-categories-controller'
import { ListVehiclesController } from '@/controllers/list-vehicles-controller'

import {
  listCategoriesUseCase,
  listVehiclesUseCase
} from './usecases'

export const listCategoriesController: Response = () => {
  return adapter(
    new ListCategoriesController(
      listCategoriesUseCase()
    )
  )
}

export const listVehiclesController: Response = () => {
  return adapter(
    new ListVehiclesController(
      listVehiclesUseCase()
    )
  )
}
