import { RequestHandler, Request, Response } from 'express'

import { Controller } from '@/domain/contracts/controller'

export type Adapter = (controller: Controller) => RequestHandler

export const controllerAdapter: Adapter = controller => async (request: Request, response: Response): Promise<Response> => {
  const dispatchController = await controller.handle(request)

  const status = Object.keys(dispatchController ?? []).length > 0
    ? 200
    : 204

  return response.status(status).send(dispatchController)
}
