import { prismaClient } from '@/infra/database'

import { IVehiclesRepository, Vehicle } from '@/domain/contracts/repositories/vehicles-repository'

export class VehiclesRepository implements IVehiclesRepository {
  public async findByCategory (categoryId: number): Promise<Vehicle[]> {
    const data = await prismaClient.vehicles.findMany({
      where: {
        categoryId
      }
    })

    return data
  }
}
