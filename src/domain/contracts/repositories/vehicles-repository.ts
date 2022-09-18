import { Prisma } from '@prisma/client'

export type Vehicle = Prisma.VehiclesUncheckedCreateInput

export interface IVehiclesRepository {
  findByCategory: (categoryId: number) => Promise<Vehicle[]>
}
