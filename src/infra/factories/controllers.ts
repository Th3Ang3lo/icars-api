import { Response } from '@/domain/contracts/controller'
import { controllerAdapter as adapter } from '@/infra/http/adapters/controller'

import { ListCategoriesController } from '@/controllers/list-categories-controller'
import { ListVehiclesController } from '@/controllers/list-vehicles-controller'
import { PostRatingController } from '@/controllers/ratings/post-rating-controller'
import { ListRatingsController } from '@/controllers/ratings/list-ratings-controller'

import {
  listCategoriesUseCase,
  listVehiclesByCategoryUseCase,
  listAllVehiclesUseCase,
  postRatingUseCase,
  listRatingsUseCase
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

export const listRatingsController: Response = () => {
  return adapter(
    new ListRatingsController(
      listRatingsUseCase()
    )
  )
}
