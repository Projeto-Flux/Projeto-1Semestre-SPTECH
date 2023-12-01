var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var emailServer = req.body.emailServer;
    var senhaServer = req.body.senhaServer;


        usuarioModel.autenticar(emailServer, senhaServer)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                                    res.json({
                                        id: resultadoAutenticar[0].idShopping,
                                        email: resultadoAutenticar[0].email,
                                        cnpj: resultadoAutenticar[0].cnpj,
                                        nome: resultadoAutenticar[0].nome,
                                        senha: resultadoAutenticar[0].senha
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

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeServer = req.body.nomeServer;
    var emailServer = req.body.emailServer;
    var cnpjServer = req.body.cnpjServer;
    var senhaServer = req.body.senhaServer;
    var cepServer = req.body.cepServer;
    var numeroServer = req.body.numeroServer;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (nomeServer == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailServer == undefined) {
        res.status(400).send("Seu email está undefined!");
    }else if (cnpjServer == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    } else if (senhaServer == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }  else { 

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nomeServer, emailServer, cnpjServer, senhaServer,cepServer,numeroServer)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function coletarFluxo(req, res) {
    var idShopping = req.query.idShopping;

    usuarioModel.coletarFluxo(idShopping)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            console.error("Erro ao processar a solicitação:", error);
            res.status(500).json({ error: "Erro interno do servidor" });
        });

}
function coletarModaHora(req, res) {
    var idShopping = req.query.idShopping;

    usuarioModel.coletarModaHora(idShopping)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    });
}

function coletarZonaMaisMovimentada(req, res) {
    var idShopping = req.query.idShopping;
    
    usuarioModel.coletarZonaMaisMovimentada(idShopping)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    });
}

function coletarZonas(req, res) {
    var idShopping = req.query.idShopping;
    
    usuarioModel.coletarZonas(idShopping)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    });
}
function coletarCapacidadeTotal(req, res) {
    var idShopping = req.query.idShopping;
    
    usuarioModel.coletarCapacidadeTotal(idShopping)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    });
}

module.exports = {
    autenticar,
    cadastrar,
    coletarFluxo,
    coletarModaHora,
    coletarZonaMaisMovimentada,
    coletarZonas,
    coletarCapacidadeTotal
}