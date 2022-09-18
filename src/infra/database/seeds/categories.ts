import { prismaClient } from '@/infra/database'

import { categories } from '@/shared/constants/categories'

void (async () => {
  try {
    await prismaClient.$connect()

    await prismaClient.categories.createMany({
      data: categories
    })

    console.log('Seed de categorias inseridas.')
  } catch (error) {
    console.log('Houve um erro ao gerar as seed de categorias. ', error)
  }
})()
