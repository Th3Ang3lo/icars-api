module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  clearMocks: true,
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  testTimeout: 40000,
  maxWorkers: '50%',
  // testMatch: ['<rootDir>/__tests__/**/*.(spec|test).ts'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  setupFiles: ['<rootDir>/jest.setup.js']
}
