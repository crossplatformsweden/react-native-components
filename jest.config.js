module.exports = {
  verbose: false,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testEnvironment: 'node',   
  cacheDirectory: ".jest/cache",
  testPathIgnorePatterns: [
    "\\.snap$",
    "<rootDir>/node_modules/",
    "<rootDir>/build",
    "<rootDir>/lib",
  ],
  transformIgnorePatterns: [
    "\\.snap$",
    "<rootDir>/build",
    "<rootDir>/lib",
    'node_modules/(?!(react-native|react-native-vector-icons|react-native/Libraries/Image/RelativeImageStub|react-navigation|jest-resolve|expo|lodash|react|jest-expo|react-native-elements|react-native-google-places-autocomplete)/)',
  ],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "\\.(ts|tsx)$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testMatch: null,
  setupFiles: [
    '<rootDir>/config/jest/globalFetch.ts',
    '<rootDir>/config/setupTests.js',
  ],
  moduleDirectories: ['node_modules'],
  unmockedModulePathPatterns: [
    '<rootDir>/node_modules/react',
    '<rootDir>/node_modules/react-dom',
    '<rootDir>/node_modules/react-addons-test-utils',
  ],  
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/fileMock.js"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/__mocks__/**",
    "!**/__snapshots__/**",
    "!**/android/**",
    "!**/ios/**",
    "!**/config/**",
    "!**/build/**",
    "!**/lib/**",
  ]
};
