import { expressValidationAdapter, ValidationEnum } from '../adapters/validation'

import { file } from '@/infra/validations/file'

export const fileValidator = expressValidationAdapter(file, ValidationEnum.FILE)
