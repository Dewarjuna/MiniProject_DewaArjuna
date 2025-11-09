export default {
  testEnvironment: "jsdom",
  transform: { "^.+\\.(js|jsx)$": "babel-jest" },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png|jpe?g|webp)$": "<rootDir>/_mocks_/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{test,spec}.{js,jsx}",
    "<rootDir>/src/**/*.{test,spec}.{js,jsx}",
  ],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/main.jsx"],
  coverageThreshold: { 
    global: { 
      lines: 70,
      statements: 70,
      functions: 70,
      branches: 70
    } 
  },
  roots: ["<rootDir>/src"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.vscode/",
    "/dist/",
    "/coverage/",
  ]
};