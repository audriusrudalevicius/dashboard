Error.stackTraceLimit = Infinity;
require('reflect-metadata');

var testContext = require.context('./test', true, /\.spec\.ts$/);
var appContext = require.context('./src', true, /\.spec\.ts$/);

console.log(testContext.keys());

appContext.keys().forEach(appContext);
testContext.keys().forEach(testContext);