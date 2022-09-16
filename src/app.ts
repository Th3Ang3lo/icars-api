import cors from 'cors'

import express from 'express'

import { Routes } from '@/infra/http/routes'

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(Routes)

export default app
