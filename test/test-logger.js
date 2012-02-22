var Logger = require('../lib/logger.js').Logger;

// Test logging to file
var log = new Logger(__dirname + '/test.log', 'debug');
log.debug('Test output');

// Test logging to console
var log = new Logger(null, 'debug');
log.debug('Test output');