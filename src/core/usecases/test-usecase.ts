import { TestUseCaseOutput } from '@/domain/contracts/usecases/test-usecase'

export class TestUseCase {
  public async execute(): Promise<TestUseCaseOutput> {
    return {
      message: 'Hello World'
    }
  }
}
