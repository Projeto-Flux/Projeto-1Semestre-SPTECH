var aquarioModel = require("../models/aquarioModel");

function coletarQtdTotal(req, res) {

        aquarioModel.coletarFluxo()
            .then(
                function (resultadoColeta) {
                    console.log(`\nResultados encontrados: ${resultadoColeta.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoColeta)}`); // transforma JSON em String
                    if (resultadoColeta.length == 1) {
                        console.log(resultadoColeta);
                                    res.json({
                                        fluxo: resultadoColeta[0].qtdPresenca
                                    });   
                            
                    }
                    else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    

}

module.exports = {
    coletarQtdTotal
}