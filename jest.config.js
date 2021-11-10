/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    'src/**/index.{ts,tsx}': {
      branches: 100,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    'src/store/**/*.{action,reducer,hook}.{ts,tsx}': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};
