const express = require('express');
const app = express();

app.get('/', function(req, rest){
    rest.send("Seja bem vindo ao app!")
})

app.get('/eita', function(req, res)
{
    res.send('Eita parou aqui!');
})

app.get('/Ola/:nome/:cargo', function(req, res){

    res.send(`Ola ${req.params.nome} ${req.params.cargo}`);

})

app.listen(8081, function(){
    console.log('servidor rodando!');
});
