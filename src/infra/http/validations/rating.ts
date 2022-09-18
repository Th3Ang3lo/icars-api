import { expressValidationAdapter } from '../adapters/validation'

import { rating } from '@/infra/validations/rating'

export const ratingValidator = expressValidationAdapter(rating)
