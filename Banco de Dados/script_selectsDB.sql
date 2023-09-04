use projetoflux;

select concat('O id da empresa ', nome ,' é ', idEmpresa ,' com o CNPJ ', cnpj ,' tendo o email: ',email, 'e o CEP e o número sendo respectivamente: ', cep ,' ', numero ) as Dados from empresa where idEmpresa = 2;
select horarioDia, id_sensor from fluxo;
select concat('O sensor id: ',idSensor,' está na zona ', id_zona, ' e na porta ',porta,' do arduino') as Sensores from sensores;
select * from usuario;
select * from zona;