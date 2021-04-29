/*
 * Create and export configuration variables
 *
 */

// Container for all the environments
const environments = {};

// Staging (default) environment
environments.staging = {
  'httpPort': 3000,
  'httpsPort': 3001,
  'envName': 'staging',
  'hashingSecret': 'thisIsASecret',
  'maxChecks': 5,
  'twilio' : {
    'accountSid' : '',
    'authToken' : '',
    'fromPhone' : ''
  },
  'templateGlobals': {
    'appName': 'UptimeChecker',
    'companyName': 'NotARealCompany, Inc',
    'yearCreated': '2018',
    'baseUrl': 'http://localhost:3000/'
  }
};

// Production object
environments.production = {
  'httpPort': 5000,
  'httpsPort': 5001,
  'envName': 'production',
  'hashingSecret': 'thisIsAlsoASecret',
  'maxChecks': 5,
  'twilio': {
    'accountSid': '',
    'authToken': '',
    'fromPhone': ''
  },
  'templateGlobals': {
    'appName': 'UptimeChecker',
    'companyName': 'NotARealCompany, Inc',
    'yearCreated': '2018',
    'baseUrl': 'http://localhost:5000/'
  }
};

environments.testing = {
  'httpPort': 4000,
  'httpsPort': 4001,
  'envName': 'testing',
  'hashingSecret': 'thisIsAlsoASecret',
  'maxChecks': 5,
  'twilio': {
    'accountSid': '',
    'authToken': '',
    'fromPhone': ''
  },
  'templateGlobals': {
    'appName': 'UptimeChecker',
    'companyName': 'NotARealCompany, Inc',
    'yearCreated': '2018',
    'baseUrl': 'http://localhost:4000/'
  }
};

// Determine which environment was passed as a command-line argument
const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments aobeve, if not, default to staging
const environmentToExport = typeof(environments[currentEnvironment]) === 'object' ? environments[currentEnvironment] : environments.staging;

// Export the module
module.exports = environmentToExport;
