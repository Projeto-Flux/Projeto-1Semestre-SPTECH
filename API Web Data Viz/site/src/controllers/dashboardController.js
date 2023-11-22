var aquarioModel = require("../models/aquarioModel");

function coletarQtdTotal(req, res) {


        aquarioModel.coletarFluxo()
            .then(result => {
                res.status(200).json(result);
            })
            .catch(error => {
                console.error("Erro ao processar a solicitação:", error);
                res.status(500).json({ error: "Erro interno do servidor" });
            });

}

module.exports = {
    coletarQtdTotal: coletarQtdTotal
}