module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-styled-components',
  ],
  collectCoverageFrom: [
    '**/components/**/*.{tsx,ts,js}',
    '**/pages/**/*.{tsx,ts,js}',
    // don't collect coverage from the .next directory
    '!**/.next/**',
  ],
};
