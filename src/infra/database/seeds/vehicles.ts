import { prismaClient } from '@/infra/database'
import { categories } from '@/shared/constants/categories'

void (async () => {
  try {
    await prismaClient.$connect()

    await prismaClient.vehicles.create({
      data: {
        id: 1,
        name: 'Tesla Model S',
        categoryId: categories[0].id,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 1deserunt mollit anim id est laborum.',
        year: '2022',
        created_at: new Date(),
        updated_at: new Date(),
        vehicleImages: {
          create: [
            {
              url: 'https://i.imgur.com//ahNRyvz.png',
              created_at: new Date()
            },
            {
              url: 'https://i.imgur.com//8Ds1Ypa.png',
              created_at: new Date()
            }
          ]
        }
      }
    })
    await prismaClient.vehicles.create({
      data: {
        id: 2,
        name: 'Audi RS 5',
        categoryId: categories[1].id,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 1deserunt mollit anim id est laborum.',
        year: '2018',
        created_at: new Date(),
        updated_at: new Date(),
        vehicleImages: {
          create: [
            {
              url: 'https://i.imgur.com//G8QSO6B.png',
              created_at: new Date()
            },
            {
              url: 'https://i.imgur.com//5JBDiM2.png',
              created_at: new Date()
            }
          ]
        }
      }
    })
    await prismaClient.vehicles.create({
      data: {
        id: 3,
        name: 'Volvo XC90',
        categoryId: categories[2].id,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 1deserunt mollit anim id est laborum.',
        year: '2017',
        created_at: new Date(),
        updated_at: new Date(),
        vehicleImages: {
          create: [
            {
              url: 'https://i.imgur.com/EF6nhOK.png',
              created_at: new Date()
            },
            {
              url: 'https://i.imgur.com/L9iGD8E.png',
              created_at: new Date()
            },
            {
              url: 'https://i.imgur.com/U2Q3os4.png',
              created_at: new Date()
            }
          ]
        }
      }
    })

    await prismaClient.vehicles.create({
      data: {
        id: 4,
        name: 'Corvette',
        categoryId: categories[3].id,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 1deserunt mollit anim id est laborum.',
        year: '2018',
        created_at: new Date(),
        updated_at: new Date(),
        vehicleImages: {
          create: [
            {
              url: 'https://i.imgur.com/ge65Lyt.png',
              created_at: new Date()
            },
            {
              url: 'https://i.imgur.com/K92yK9X.png',
              created_at: new Date()
            },
            {
              url: 'https://i.imgur.com/RqutOc0.png',
              created_at: new Date()
            }
          ]
        }
      }
    })

    await prismaClient.vehicles.create({
      data: {
        id: 5,
        name: 'Lamborghini Huracan',
        categoryId: categories[4].id,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 1deserunt mollit anim id est laborum.',
        year: '2022',
        created_at: new Date(),
        updated_at: new Date(),
        vehicleImages: {
          create: [
            {
              url: 'https://i.imgur.com/x8CB1v8.png',
              created_at: new Date()
            },
            {
              url: 'https://i.imgur.com/noJYM8P.png',
              created_at: new Date()
            },
            {
              url: 'https://i.imgur.com/9H5ls3C.png',
              created_at: new Date()
            }
          ]
        }
      }
    })

    await prismaClient.vehicles.create({
      data: {
        id: 6,
        name: 'Lancer Evolution GSR',
        categoryId: categories[5].id,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 1deserunt mollit anim id est laborum.',
        year: '2015',
        created_at: new Date(),
        updated_at: new Date(),
        vehicleImages: {
          create: [
            {
              url: 'https://i.imgur.com/dyuVAPn.png',
              created_at: new Date()
            },
            {
              url: 'https://i.imgur.com/cyXPLS0.png',
              created_at: new Date()
            },
            {
              url: 'https://i.imgur.com/ciIYoU8.png',
              created_at: new Date()
            }
          ]
        }
      }
    })

    console.log('Seed de veículos inserida.')
  } catch (error) {
    console.log('Houve um erro ao gerar as seed de categorias. ', error)
  }
})()
