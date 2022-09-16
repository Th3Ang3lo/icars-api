import { Request, Response, NextFunction } from 'express'

import * as yup from 'yup'

import { BadRequestException } from '@/shared/exceptions'

export enum ValidationEnum {
  BODY = 'body',
  PARAMS = 'params',
  QUERY = 'query'
}

export const yupValidationAdapter = async (validation: any, data: any): Promise<void> => {
  try {
    const object = yup.object(validation)

    await object.validate(data)
  } catch (error) {
    throw new BadRequestException(error.message, error.path)
  }
}

export const expressValidationAdapter = (validation: any, type: ValidationEnum = ValidationEnum.BODY) =>
  async (request: Request, response: Response, next: NextFunction) => {
    await yupValidationAdapter(validation, request[type])

    next()
  }
