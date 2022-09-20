import { expressValidationAdapter, ValidationEnum } from '../adapters/validation'

import { pagination } from '@/infra/validations/pagination'

export const paginationValidator = expressValidationAdapter(pagination, ValidationEnum.QUERY)
