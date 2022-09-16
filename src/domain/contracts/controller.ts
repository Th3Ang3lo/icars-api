import { Request as ExpressRequest } from 'express'

export type Request = ExpressRequest

export interface HttpResponse {
  statusCode: number
  data: any
}

export type Response = any

export interface Controller {
  handle: (request: Request) => Promise<Response>
}
