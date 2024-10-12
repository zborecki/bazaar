// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

module.exports = createJestConfig({
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom'
});
