import { RequestHandler, Request, Response } from 'express'

import { Controller } from '@/domain/contracts/controller'

export type Adapter = (controller: Controller) => RequestHandler

export const controllerAdapter: Adapter = controller => async (request: Request, response: Response): Promise<Response> => {
  try {
    const dispatchController = await controller.handle(request)

    const status = Object.keys(dispatchController ?? []).length > 0
      ? 200
      : 204

    return response.status(status).send(dispatchController)
  } catch (error) {
    if (process.env.NODE_ENV === 'dev') {
      console.log(error)
    }

    return response.status(error.statusCode || 500).send({
      message: error.errorMessage || 'Internal Server Error',
      field: error.param || undefined
    })
  }
}
