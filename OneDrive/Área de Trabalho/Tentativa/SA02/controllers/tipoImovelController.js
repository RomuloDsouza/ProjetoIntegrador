// Importa o modelo de tipoImovel para fazer as operações CRUD relacionadas as tipoImovels
const tipoImovelModel = require("../models/tipoImovelModel");

// Define a classe tipoImovelController, responsável por controlar as operações relacionadas as tipoImovels
class TipoImovelController {
  // Método para ler a lista de todas as tipoImovels
  readList(req, res) {
    // Chama a função readList() do modelo tipoImovelModel para obter a lista de tipoImovels
    const retorno = tipoImovelModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma tipoImovel foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para ler uma tipoImovel específica por ID
  read(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo tipoImovelModel para obter a tipoImovel por ID fornecido
    const retorno = tipoImovelModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("tipoImovel não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar uma nova tipoImovel
  create(req, res) {
    // Obtém os dados da nova tipoImovel do corpo da requisição
    const reqBody = req.body; 
    // Chama a função create() do modelo tipoImovelModel para criar uma nova tipoImovel
    const retorno = tipoImovelModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("tipoImovel criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para atualizar uma tipoImovel existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da tipoImovel do corpo da requisição
    const reqBody = req.body;
      
    // Chama a função update() do modelo tipoImovelModel para atualizar a tipoImovel com o ID fornecido
    const retorno = tipoImovelModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("tipoImovel atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  // Método para excluir uma tipoImovel existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo tipoImovelModel para excluir a tipoImovel com o ID fornecido
    const retorno = tipoImovelModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("tipoImovel deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
  
}

// Exporta uma instância da classe tipoImovelController para ser utilizada em outros arquivos do projeto
module.exports = new TipoImovelController();
