import * as path from 'path';

module.exports = {
  rootDir: path.join(__dirname, '..'),
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  // this checks all files but leads to a bunch being skipped thanks to the "ignorePath": "./.gitignore" in package.json
  // had to add the !** to fix some of them, TODO: find out which ones are skipped and why they still display
  testMatch: ['<rootDir>/**/*.{tsx,ts,js}', '!**/.next/**/*'],
};
