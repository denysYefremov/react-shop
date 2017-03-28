const context = require.context('./app/scripts', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);
