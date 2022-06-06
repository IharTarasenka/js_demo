/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    verbose: true,
    testMatch: [
      "**/tests/**/*.[jt]s?(x)"
    ],
    testRunner: "jest-jasmine2",
    preset: "jest-playwright-preset",
    testTimeout: 30000,
    setupFilesAfterEnv: [
      "expect-playwright",
      "jest-allure/dist/setup"
    ],
};

