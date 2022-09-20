import { Router } from 'express'

import {
  listCategoriesController,
  listRatingsController,
  listVehiclesController,
  postRatingController
} from '@/infra/factories/controllers'

import {
  ratingValidator,
  paginationValidator
} from '@/infra/http/validations'

export const Routes = Router()

Routes.get('/categories', listCategoriesController())
Routes.get('/vehicles/:categoryId', listVehiclesController())

Routes.post('/vehicle/:vehicleId/rating', ratingValidator, postRatingController())
Routes.get('/vehicle/:vehicleId/rating', paginationValidator, listRatingsController())
