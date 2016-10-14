var server = require('http').createServer(require('./app'));

server.listen(process.env.PORT, function(){
  console.log('listening');
});
