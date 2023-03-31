module.exports = {
  roots: ["<rootDir>/tests/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png|jpeg)$": "<rootDir>/.jest/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "axios": "axios/dist/node/axios.cjs"
  }
}