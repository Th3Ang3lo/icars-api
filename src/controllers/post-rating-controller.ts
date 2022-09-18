import { Controller, Request, Response } from '@/domain/contracts/controller'

import { PostRatingUseCase } from '@/core/usecases/post-rating-usecase'

export class PostRatingController implements Controller {
  constructor (
    private readonly postRatingUseCase: PostRatingUseCase
  ) {}

  public async handle (request: Request): Promise<Response> {
    const { author, content, note } = request.body
    const { vehicleId } = request.params

    return await this.postRatingUseCase.execute({
      author,
      content,
      note
    }, Number(vehicleId))
  }
}
