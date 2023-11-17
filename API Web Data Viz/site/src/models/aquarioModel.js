var database = require("../database/config")

function coletarFluxo() {
  var instrucaoColetarFluxo = `
      select count(sensor1) as qtdPresenca from dadosFluxo where sensor1 = 1;
  `
  console.log("Executando a instrução coletar fluxo: \n "+(database.executar(instrucaoColetarFluxo)));
  return database.executar(instrucaoColetarFluxo);
}

module.exports = {
  coletarFluxo
};