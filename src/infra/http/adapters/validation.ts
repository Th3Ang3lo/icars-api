import { Request, Response, NextFunction } from 'express'

import * as yup from 'yup'

import { BadRequestException } from '@/shared/exceptions'

export enum ValidationEnum {
  BODY = 'body',
  PARAMS = 'params',
  QUERY = 'query',
  FILE = 'file'
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
    try {
      await yupValidationAdapter(validation, request[type])

      next()
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
