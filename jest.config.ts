export default {
  // bail: 0,

  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: ["src/**/*.ts"],

  coverageDirectory: "tests/coverage",

  coveragePathIgnorePatterns: ["/node_modules/"],

  coverageProvider: "babel",

  coverageReporters: ["json", "lcov"],

  moduleFileExtensions: ["js", "ts"],

  preset: "ts-jest",

  testMatch: ["<rootDir>/tests/*.spec.ts"],

  testPathIgnorePatterns: ["/node_modules/"],

  transform: { "^.+\\.ts$": "ts-jest" },

  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],

  watchman: true,
};
