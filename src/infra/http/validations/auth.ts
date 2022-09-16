import { expressValidationAdapter } from '@/infra/http/adapters/validation'

import {
  auth
} from '@/infra/validations/auth'

export const authValidator = expressValidationAdapter(auth)
