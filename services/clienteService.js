const { sql, config } = require('../config/db');

//Função para pesquisar clientes no banco de dados
async function pesquisarCliente() {
    const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request().query('SELECT * FROM Cliente');
    return resultado.recordset;
}

module.exports = {pesquisarCliente};