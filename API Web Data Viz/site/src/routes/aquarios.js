var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/coletarTotal", function (req, res) {
    dashboardController.coletarQtdTotal(req,res);
});

// router.post("/cadastrar", function (req, res) {
//   aquarioController.cadastrar(req, res);
// })

module.exports = router;