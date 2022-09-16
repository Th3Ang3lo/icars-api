import { TestController } from '@/controllers/test-controller'
import { Response } from '@/domain/contracts/controller'

import { controllerAdapter as adapter } from '@/infra/http/adapters/controller'

import { testUseCase } from './usecases'

export const testController: Response = () => {
  return adapter(
    new TestController(
      testUseCase()
    )
  )
}
