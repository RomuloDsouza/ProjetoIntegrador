// Importa o módulo que contém a conexão com o banco de dados
const dbConnection = require("../db/dbConnection");

// Define a classe jobModel para manipular operações relacionadas às statusImovels no banco de dados
class StatusImovelModel {

  // Método para executar consultas SQL no banco de dados
  executeSQL(sql, parametros = "") {
    // Retorna uma Promise que representa a execução da consulta SQL
    return new Promise( function (resolve, reject) {
        
        // Executa a consulta SQL utilizando a conexão com o banco de dados e os parâmetros fornecidos
        dbConnection.query(sql, parametros, function (error, resposta) {
          // Se ocorrer um erro durante a execução da consulta, rejeita a Promise com o erro
          if (error) {
            return reject(error);
          }
          // Se a consulta for bem-sucedida, resolve a Promise com a resposta do banco de dados
          return resolve(resposta);
        });

      }
    );
  }

  // Método para obter a lista de todas as statusImovels no banco de dados
  readList() {
    const sql = "SELECT IdStatusImovel,NomestatusImovel FROM statusImovel"; // Consulta SQL para selecionar todas as statusImovels
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para obter uma statusImovel específica por ID no banco de dados
  read(id) {
    const sql = "SELECT IdstatusImovel,NomestatusImovel FROM statusImovel WHERE IdstatusImovel = ?"; // Consulta SQL para selecionar uma statusImovel por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para criar uma nova statusImovel no banco de dados
  create(newstatusImovel) {
    const sql = "INSERT INTO statusImovel SET ?"; // Consulta SQL para inserir uma nova 
    return this.executeSQL(sql, newstatusImovel); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para atualizar uma statusImovel existente por ID no banco de dados
  update(updatedstatusImovel, id) {
    const sql = "UPDATE statusImovel SET ? WHERE IdstatusImovel= ?"; // Consulta SQL para atualizar uma statusImovel por ID
    return this.executeSQL(sql, [updatedstatusImovel, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para excluir uma statusImovel existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM statusImovel WHERE IdstatusImovel = ?"; // Consulta SQL para excluir uma statusImovel por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

}

// Exporta uma instância da classe statusImovelModel para ser utilizada em outros arquivos do projeto
module.exports = new StatusImovelModel();
