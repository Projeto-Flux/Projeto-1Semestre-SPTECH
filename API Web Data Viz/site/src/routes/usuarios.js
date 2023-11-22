var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/coletarFluxo", function (req, res) {
    usuarioController.coletarFluxo(req, res);
});

router.get("/coletarModaHora", function (req, res) {
    usuarioController.coletarModaHora(req, res);
});

router.get("/coletarZonaMaisMovimentada", function (req, res) {
    usuarioController.coletarZonaMaisMovimentada(req, res);
});
module.exports = router;