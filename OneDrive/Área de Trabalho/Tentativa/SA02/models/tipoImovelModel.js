// Importa o módulo que contém a conexão com o banco de dados
const dbConnection = require("../db/dbConnection");

// Define a classe jobModel para manipular operações relacionadas às TipoImovels no banco de dados
class TipolmovelModel {

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

  // Método para obter a lista de todas as TipoImovels no banco de dados
  readList() {
    const sql = "SELECT IdTipoImovel,NomeTipoImovel FROM TipoImovel"; // Consulta SQL para selecionar todas as TipoImovels
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para obter uma TipoImovel específica por ID no banco de dados
  read(id) {
    const sql = "SELECT IdTipoImovel,NomeTipoImovel FROM TipoImovel WHERE IdTipoImovel = ?"; // Consulta SQL para selecionar uma TipoImovel por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para criar uma nova TipoImovel no banco de dados
  create(newTipoImovel) {
    const sql = "INSERT INTO TipoImovel SET ?"; // Consulta SQL para inserir uma nova 
    return this.executeSQL(sql, newTipoImovel); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para atualizar uma TipoImovel existente por ID no banco de dados
  update(updatedTipoImovel, id) {
    const sql = "UPDATE TipoImovel SET ? WHERE IdTipoImovel= ?"; // Consulta SQL para atualizar uma TipoImovel por ID
    return this.executeSQL(sql, [updatedTipoImovel, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para excluir uma TipoImovel existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM TipoImovel WHERE IdTipoImovel = ?"; // Consulta SQL para excluir uma TipoImovel por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

}

// Exporta uma instância da classe TipoImovelModel para ser utilizada em outros arquivos do projeto
module.exports = new TipolmovelModel();
