/* eslint-env node */
module.exports = {
  "test_page": "tests/index.html?hidepassed",
  "browser_start_timeout": 180,
  "disable_watching": true,
  "launch_in_ci": [
    "Chrome",
    "Firefox"
  ],
  "launch_in_dev": [
    "Chrome"
  ]
};
