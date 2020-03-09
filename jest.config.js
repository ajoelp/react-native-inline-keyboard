const jestPreset = require('@testing-library/react-native/jest-preset');

module.exports = Object.assign(jestPreset, {
  setupFiles: [...jestPreset.setupFiles],
  modulePathIgnorePatterns: [
    ...(jestPreset.modulePathIgnorePatterns || []),
    '<rootDir>/example/node_modules',
    '<rootDir>/lib/',
  ],
});
