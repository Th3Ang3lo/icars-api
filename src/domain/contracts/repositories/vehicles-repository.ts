import { Prisma } from '@prisma/client'

export type Vehicle = Prisma.VehiclesUncheckedCreateInput

export interface IVehiclesRepository {
  findByCategory: (categoryId: number) => Promise<Vehicle[]>
  findById: (id: number) => Promise<Vehicle>
  findAll: () => Promise<Vehicle[]>
}
