import { ListAllVehiclesUseCase } from '@/core/usecases/list-all-vehicles-usecase'
import { ListCategoriesUseCase } from '@/core/usecases/list-categories-usecase'
import { ListVehiclesByCategoryUseCase } from '@/core/usecases/list-vehicles-by-category-usecase'

import { CategoriesRepository } from '@/infra/database/repositories/categories-repository'
import { VehiclesRepository } from '@/infra/database/repositories/vehicles-repository'

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
