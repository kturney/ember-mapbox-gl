module.exports = {
  test_page: 'tests/index.html?hidepassed',
  browser_start_timeout: 180,
  disable_watching: true,
  launch_in_ci: [
    'Chrome',
    'Firefox'
  ],
  launch_in_dev: [
    'Chrome'
  ],
  browser_args: {
    Chrome: {
      ci: [
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--mute-audio',
        '--remote-debugging-port=0',
        '--window-size=1440,900'
      ]
    }
  }
};
