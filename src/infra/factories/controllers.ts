import { Response } from '@/domain/contracts/controller'
import { controllerAdapter as adapter } from '@/infra/http/adapters/controller'

import { ListCategoriesController } from '@/controllers/list-categories-controller'
import { ListVehiclesController } from '@/controllers/list-vehicles-controller'
import { PostRatingController } from '@/controllers/post-rating-controller'

import {
  listCategoriesUseCase,
  listVehiclesByCategoryUseCase,
  listAllVehiclesUseCase,
  postRatingUseCase
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
      listVehiclesByCategoryUseCase(),
      listAllVehiclesUseCase()
    )
  )
}

export const postRatingController: Response = () => {
  return adapter(
    new PostRatingController(
      postRatingUseCase()
    )
  )
}
