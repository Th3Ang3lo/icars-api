import 'reflect-metadata'
import 'dotenv/config'

import app from '@/app'

import { prismaClient } from '@/infra/database'

void prismaClient.$connect()
  .then(() => {
    console.log('Postgres connected successfully')

    const port = process.env.PORT || 3333
    app.listen(port, () => console.log(`Running on port ${port}`))
  })
