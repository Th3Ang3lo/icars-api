import { TestUseCase } from '@/core/usecases/test-usecase'

export const testUseCase = (): TestUseCase => {
  return new TestUseCase()
}
