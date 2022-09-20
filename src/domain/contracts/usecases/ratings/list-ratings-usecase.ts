import { Rating } from '@/domain/contracts/repositories/ratings-repository'

export interface ListRatingsUseCaseOutput {
  total: number
  data: Rating[]
}
