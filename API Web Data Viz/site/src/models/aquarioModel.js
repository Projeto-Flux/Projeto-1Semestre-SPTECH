var database = require("../database/config")

function coletarFluxo() {
  var instrucaoColetarFluxo = `
    select count(presenca) from dadosFluxo where presenca = 1;
  `
  console.log("Executando a instrução coletar fluxo: \n "+(database.executar(instrucaoColetarFluxo)));
  return database.executar(instrucaoColetarFluxo);
}

module.exports = {
  coletarFluxo
};