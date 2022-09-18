import { prismaClient } from '@/infra/database'

import { IVehiclesRepository, Vehicle } from '@/domain/contracts/repositories/vehicles-repository'

export class VehiclesRepository implements IVehiclesRepository {
  public async findByCategory (categoryId: number): Promise<Vehicle[]> {
    const data = await prismaClient.vehicles.findMany({
      where: {
        categoryId
      },
      include: {
        vehicleImages: true
      }
    })

    return data as Vehicle[]
  }

  public async findAll (): Promise<Vehicle[]> {
    const data = await prismaClient.vehicles.findMany({
      include: {
        vehicleImages: true
      }
    })

    return data as Vehicle[]
  }

  public async findById (id: number): Promise<Vehicle> {
    const data = await prismaClient.vehicles.findFirst({
      where: {
        id
      }
    })

    return data
  }
}
