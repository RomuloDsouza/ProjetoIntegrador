// Importa o módulo Router do framework Express
const Router = require("express").Router;

// Cria uma instância de um roteador do Express
// O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
const router = Router();

// ----------------------------------------------------------------------------------------------
// Métodos HTTP para fazer as requisições
// ----------------------------------------------------------------------------------------------


// Importa o controlador de tipoImovel
const tipoImovelController = require("../controllers/tipoImovelController");

// Define uma rota GET para listar todas as tipoImovel
// Quando uma solicitação GET é feita para "/tipoImovel", o método readList() do controlador de tipoImovel é chamado
router.get("/tipoimovel", tipoImovelController.readList);

// Define uma rota GET para ler uma tipoImovel específica por ID
// Quando uma solicitação GET é feita para "/tipoImovel/:id", o método read() do controlador de tipoImovel é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da tipoImovel
router.get("/tipoimovel/:id", tipoImovelController.read);

// Define uma rota POST para criar uma nova tipoImovel
// Quando uma solicitação POST é feita para "/tipoImovel", o método create() do controlador de tipoImovel é chamado
router.post("/tipoimovel", tipoImovelController.create);

// Define uma rota PUT para atualizar uma tipoImovel existente por ID
// Quando uma solicitação PUT é feita para "/tipoImovel/:id", o método update() do controlador de tipoImovel é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da tipoImovel
router.put("/tipoimovel/:id", tipoImovelController.update);

// Define uma rota DELETE para excluir uma tipoImovel existente por ID
// Quando uma solicitação DELETE é feita para "/tipoImovel/:id", o método delete() do controlador de tipoImovel é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da tipoImovel
router.delete("/tipoimovel/:id", tipoImovelController.delete);

// Exporta o objeto router (roteador)
// O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
module.exports = router;
