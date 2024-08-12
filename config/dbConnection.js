var mysql = require('mysql'); // recuperando o drive de conexao

var connMySQL = function(){
    console.log('Conexao com o bd foi estabelecida');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com o bd');
    return connMySQL;
}