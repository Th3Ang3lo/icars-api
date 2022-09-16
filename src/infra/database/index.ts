import { PrismaClient } from '@prisma/client'

export const prismaClient = new PrismaClient({
  log: [
    { level: 'warn', emit: 'event' },
    { level: 'info', emit: 'event' },
    { level: 'error', emit: 'event' }
  ],
  errorFormat: 'pretty'
})

prismaClient.$on('error', (log: any): void => {
  console.error(log)
  process.exit(1)
})

prismaClient.$on('warn', (log: any): void => {
  console.warn('[PRISMA][WARNING]', log)
})

prismaClient.$on('info', (log: any): void => {
  console.info('[PRISMA][INFO]', log)
})

prismaClient.$on('error', (log: any): void => {
  console.error('[PRISMA][ERROR]', log)
})
