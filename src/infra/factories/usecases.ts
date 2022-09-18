import { ListCategoriesUseCase } from '@/core/usecases/list-categories-usecase'
import { ListVehiclesUseCase } from '@/core/usecases/list-vehicles-usecase'

import { CategoriesRepository } from '@/infra/database/repositories/categories-repository'
import { VehiclesRepository } from '@/infra/database/repositories/vehicles-repository'

export const listCategoriesUseCase = (): ListCategoriesUseCase => {
  return new ListCategoriesUseCase(
    new CategoriesRepository()
  )
}

export const listVehiclesUseCase = (): ListVehiclesUseCase => {
  return new ListVehiclesUseCase(
    new VehiclesRepository()
  )
}
