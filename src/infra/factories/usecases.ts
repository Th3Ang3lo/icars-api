import { ListAllVehiclesUseCase } from '@/core/usecases/list-all-vehicles-usecase'
import { ListCategoriesUseCase } from '@/core/usecases/list-categories-usecase'
import { ListVehiclesByCategoryUseCase } from '@/core/usecases/list-vehicles-by-category-usecase'
import { PostRatingUseCase } from '@/core/usecases/post-rating-usecase'

import { CategoriesRepository } from '@/infra/database/repositories/categories-repository'
import { VehiclesRepository } from '@/infra/database/repositories/vehicles-repository'
import { RatingsRepository } from '@/infra/database/repositories/ratings-repository'

export const listCategoriesUseCase = (): ListCategoriesUseCase => {
  return new ListCategoriesUseCase(
    new CategoriesRepository()
  )
}

export const listVehiclesByCategoryUseCase = (): ListVehiclesByCategoryUseCase => {
  return new ListVehiclesByCategoryUseCase(
    new VehiclesRepository()
  )
}

export const listAllVehiclesUseCase = (): ListAllVehiclesUseCase => {
  return new ListAllVehiclesUseCase(
    new VehiclesRepository()
  )
}

export const postRatingUseCase = (): PostRatingUseCase => {
  return new PostRatingUseCase(
    new VehiclesRepository(),
    new RatingsRepository()
  )
}
