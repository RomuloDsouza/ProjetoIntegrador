// Importa o modelo de statusImovel para fazer as operações CRUD relacionadas as statusImovels
const statusImovelModel = require("../models/statusImovelModel");

// Define a classe statusImovelController, responsável por controlar as operações relacionadas as statusImovels
class StatusImovelController {
  // Método para ler a lista de todas as statusImovels
  readList(req, res) {
    // Chama a função readList() do modelo statusImovelModel para obter a lista de statusImovels
    const retorno = statusImovelModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma statusImovel foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para ler uma statusImovel específica por ID
  read(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo statusImovelModel para obter a statusImovel por ID fornecido
    const retorno = statusImovelModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("statusImovel não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar uma nova statusImovel
  create(req, res) {
    // Obtém os dados da nova statusImovel do corpo da requisição
    const reqBody = req.body; 
    // Chama a função create() do modelo statusImovelModel para criar uma nova statusImovel
    const retorno = statusImovelModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("statusImovel criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para atualizar uma statusImovel existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da statusImovel do corpo da requisição
    const reqBody = req.body;
      
    // Chama a função update() do modelo statusImovelModel para atualizar a statusImovel com o ID fornecido
    const retorno = statusImovelModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("statusImovel atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  // Método para excluir uma statusImovel existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo statusImovelModel para excluir a statusImovel com o ID fornecido
    const retorno = statusImovelModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("statusImovel deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
  
}

// Exporta uma instância da classe statusImovelController para ser utilizada em outros arquivos do projeto
module.exports = new StatusImovelController();
