var database = require("../database/config")
var dashboard = require("../models/aquarioModel")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idShopping, nome, cnpj, email FROM shopping WHERE email = '${email}' AND senha = '${senha}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    dashboard.coletarFluxo();
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nomeServer, emailServer, cnpjServer, senhaServer, cepServer, numeroServer) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeServer, emailServer, senhaServer);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO shopping (nome,email,  cnpj, senha, cep, numero) VALUES ('${nomeServer}', '${emailServer}', '${cnpjServer}', '${senhaServer}',${cepServer},${numeroServer});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function coletarFluxo(idShopping) {
    var instrucaoColetarFluxo = `
    select count(presenca) as presencaTotal from shopping as s join zona as z on idShopping = fkShopping
	join sensor as se on idzona = fkZona
    join dadosFluxo as df on idSensor = fkSensor
	where presenca = 1 and fkShopping = ${idShopping};
    `

    console.log("Executando a instrução coletar fluxo: \n " + (database.executar(instrucaoColetarFluxo)));
    return database.executar(instrucaoColetarFluxo);
}

function coletarModaHora(idShopping) {
    var instrucaoColetarFluxo = `
    select hour(df.horaDia) as hora, count(*) as quantidade from shopping as s join zona as z on idShopping = fkShopping
	join sensor as se on idzona = fkZona
    join dadosFluxo as df on idSensor = fkSensor
    where presenca = 1 and idShopping = ${idShopping}
    group by hora order by quantidade desc limit 1; -- limit 1 é para selecionar apenas o primeiro valor que no caso será o maior
    `

    console.log("Executando a instrução coletar fluxo: \n " + (database.executar(instrucaoColetarFluxo)));
    return database.executar(instrucaoColetarFluxo);
}

function coletarZonaMaisMovimentada(idShopping){
    var instrucaoColetarFluxo = `
    select z.nome as zonaMaisMovimentada, count(presenca) as zonaPresenca from shopping as s join zona as z on idShopping = fkShopping 
		join sensor as se on idzona = fkZona 	
        join dadosFluxo as df on idSensor = fkSensor 
        where presenca = 1 and fkShopping = ${idShopping}
        group by z.nome
        limit 1;
    `

    console.log("Executando a instrução coletar fluxo: \n " + (database.executar(instrucaoColetarFluxo)));
    return database.executar(instrucaoColetarFluxo);
}

function coletarZonas(idShopping){
    var instrucaoColetarFluxo = `
    select z.nome, count(presenca) as zonaPresenca from shopping as s join zona as z on idShopping = fkShopping 
    join sensor as se on idzona = fkZona 	
    join dadosFluxo as df on idSensor = fkSensor 
    where presenca = 1 and fkShopping = ${idShopping}
    group by z.nome;
    `

    console.log("Executando a instrução coletar fluxo: \n " + (database.executar(instrucaoColetarFluxo)));
    return database.executar(instrucaoColetarFluxo);
}



module.exports = {
    autenticar,
    cadastrar,
    coletarFluxo,
    coletarModaHora,
    coletarZonaMaisMovimentada,
    coletarZonas
};