var Logger = require('../lib/logger.js').Logger;

// Test logging to file
var log = new Logger(__dirname + '/test.log', 'debug');
log.debug('Test output');