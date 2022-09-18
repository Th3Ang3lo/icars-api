import { Router } from 'express'

import {
  listCategoriesController,
  listVehiclesController
} from '@/infra/factories/controllers'

export const Routes = Router()

Routes.get('/categories', listCategoriesController())
Routes.get('/vehicles/:categoryId', listVehiclesController())
