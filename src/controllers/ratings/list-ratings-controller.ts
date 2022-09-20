import { Controller, Request, Response } from '@/domain/contracts/controller'

import { ListRatingsUseCase } from '@/core/usecases/ratings/list-ratings-usecase'

export class ListRatingsController implements Controller {
  constructor (
    private readonly listRatingsUseCase: ListRatingsUseCase
  ) {}

  public async handle (request: Request): Promise<Response> {
    const { page, limit } = request.query
    const { vehicleId } = request.params

    return await this.listRatingsUseCase.execute(
      Number(vehicleId),
      Number(page),
      Number(limit)
    )
  }
}
