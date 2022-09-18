import { Router } from 'express'

import {
  listCategoriesController,
  listVehiclesController,
  postRatingController
} from '@/infra/factories/controllers'

import { ratingValidator } from '@/infra/http/validations/rating'

export const Routes = Router()

Routes.get('/categories', listCategoriesController())
Routes.get('/vehicles/:categoryId', listVehiclesController())

Routes.post('/vehicle/:vehicleId/rating', ratingValidator, postRatingController())
