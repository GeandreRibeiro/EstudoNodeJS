var http = require('http');
http.createServer(function(ret, res)
{
    res.end('<h1>Ola!</h1>');
}
).listen(8081);



console.log('Servidor rodando!');