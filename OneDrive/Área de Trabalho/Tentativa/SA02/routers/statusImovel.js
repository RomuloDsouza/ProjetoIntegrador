// Importa o módulo Router do framework Express
const Router = require("express").Router;

// Cria uma instância de um roteador do Express
// O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
const router = Router();

// ----------------------------------------------------------------------------------------------
// Métodos HTTP para fazer as requisições
// ----------------------------------------------------------------------------------------------


// Importa o controlador de statusImovel
const statusImovelController = require("../controllers/statusImovelController");

// Define uma rota GET para listar todas as statusImovel
// Quando uma solicitação GET é feita para "/statusImovel", o método readList() do controlador de statusImovel é chamado
router.get("/statusimovel", statusImovelController.readList);

// Define uma rota GET para ler uma statusImovel específica por ID
// Quando uma solicitação GET é feita para "/statusImovel/:id", o método read() do controlador de statusImovel é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da statusImovel
router.get("/statusimovel/:id", statusImovelController.read);

// Define uma rota POST para criar uma nova statusImovel
// Quando uma solicitação POST é feita para "/statusImovel", o método create() do controlador de statusImovel é chamado
router.post("/statusimovel", statusImovelController.create);

// Define uma rota PUT para atualizar uma statusImovel existente por ID
// Quando uma solicitação PUT é feita para "/statusImovel/:id", o método update() do controlador de statusImovel é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da statusImovel
router.put("/statusimovel/:id", statusImovelController.update);

// Define uma rota DELETE para excluir uma statusImovel existente por ID
// Quando uma solicitação DELETE é feita para "/statusImovel/:id", o método delete() do controlador de statusImovel é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da statusImovel
router.delete("/statusimovel/:id", statusImovelController.delete);

// Exporta o objeto router (roteador)
// O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
module.exports = router;
