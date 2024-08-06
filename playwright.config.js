module.exports = {
  use: {
    headless: false, // Run tests in headful mode
    // baseURL: 'https://example.com', // Replace with your base URL
    args: ['--start-maximized']
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    }
    // },
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },
    // },
  ],
  testDir: './tests',
  timeout: 30000,
  workers: 1
};