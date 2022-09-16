import { Router } from 'express'

import { testController } from '@/infra/factories/controllers'

export const Routes = Router()

Routes.get('/test', testController())
