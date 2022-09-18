import { Router } from 'express'

import { listCategoriesController } from '@/infra/factories/controllers'

export const Routes = Router()

Routes.get('/categories', listCategoriesController())
