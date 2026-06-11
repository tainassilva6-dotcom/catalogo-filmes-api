const express = require("express");
const router = express.Router();

const controller = require("../controllers/filmesController");

router.get("/listar", controller.listar);

router.get("/buscar/:id", controller.buscar);

router.post("/cadastrar", controller.cadastrar);

router.put("/atualizar/:id", controller.atualizar);

router.delete("/remover/:id", controller.remover);

module.exports = router;