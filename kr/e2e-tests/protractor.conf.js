exports.config = {
    allScriptsTimeout: 600000,
    specs: [
        'tests/login-logout.js'
    ],
    multiCapabilities: [
      {
       'browserName': 'chrome',
       'webdriver.gecko.driver': './geckodriver',
      },
    ],
    maxSessions: '1',

    directConnect: true,
    baseUrl: 'http://localhost:3000/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: '600000',
    },
    params: {
        user: 'user01',
        password: '123456',
    },
};