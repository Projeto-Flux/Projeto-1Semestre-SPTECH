create database flux;
use flux;

create table shopping (
	idShopping int primary key auto_increment,
    nome varchar(45),
    cnpj varchar(14) unique,
    cep varchar(9),
    numero int,
    email varchar(45) unique,
    senha varchar(45)
);

create table usuario (
	idUsuario int auto_increment,
    nome varchar(45),
    email varchar(45) unique,
    senha varchar(45),
    tipoUsuario char(5),
    fkShopping int,
    check (tipoUsuario in('admin','comum')),
    primary key (idUsuario, fkShopping),
    foreign key (fkShopping) references shopping(idShopping)
);

create table zona (
	idZona int primary key auto_increment,
    nome varchar(45),
    qtdSensores int,
    tamanho int,
    capacidade int,
    fkShopping int,
    foreign key (fkShopping) references shopping(idShopping)
);

create table sensor (
	idSensor int primary key auto_increment,
    porta int,
    fkZona int,
    foreign key (fkZona) references zona(idZona)
);

create table dadosFluxo (
	idFluxo int primary key auto_increment,
    horaDia datetime,
    presenca int,
    fkSensor int,
    foreign key (fkSensor) references sensor(idSensor)
);

insert into shopping values
(null,'Shopping Aricanduva','02260467000104','012-01234',25,'aricanduva.shop@gmail.com','aricanduva1234@'),
(null,'Shopping ABC','06160465000190','000-01234',1094,'abc.shop@gmail.com','abcShop123@'),
(null,'Shopping Tatuapé','10254617000197','000-11223',901,'tatuape@shopping.com','tatuape123@'),
(null,'Shopping Pátio Paulista','30751886000176','012-34567',123,'patio.paulista@gmail.com','paulitaShopPatio123@');

insert into usuario values 
(null, 'João', 'joao@email.com', 'senha123', 'admin', 1),
(null, 'Maria', 'maria@email.com', 'senha456', 'admin', 2),
(null, 'Pedro', 'pedro@email.com', 'senha789', 'comum', 1),
(null, 'Ana', 'ana@email.com', 'senha987', 'comum', 3),
(null, 'Lucas', 'lucas@email.com', 'senha654', 'admin', 3),
(null, 'Carla', 'carla@email.com', 'senha123', 'comum', 4),
(null, 'Rafael', 'rafael@email.com', 'senha456', 'admin', 4);

insert into zona values 
(null,'Zona 1Alpha',700,2500,800,1),
(null,'Zona 1Beta',400,1800,500,1),
(null,'Zona 2Alpha',1130,3100,1100,1),
(null,'Zona 1Alpha',700,2500,800,2),
(null,'Zona 1Beta',300,900,450,2),
(null,'Zona 1Delta',700,1100,675,2),
(null,'Zona 2Alpha',1200,2100,1300,2),
(null,'Zona 1Alpha',2200,4100,2000,3),
(null,'Zona 2Alpha',1900,3800,1875,3);

insert into sensor values 
(null,1,1),(null,2,1),
(null,3,1),(null,4,2),
(null,5,2),(null,6,2),
(null,7,3),(null,8,3),
(null,1,4),(null,2,4),
(null,3,4),(null,5,5),
(null,6,6),(null,7,6),
(null,8,7),(null,1,8),
(null,2,8),(null,3,9)
	 ;

insert into dadosFluxo values
(null, '2023-10-18 15:30:00', 1, 1),
(null, '2023-10-18 15:45:00', 0, 2),
(null, '2023-10-18 16:00:00', 1, 1),
(null, '2023-10-18 16:15:00', 1, 3),
(null, '2023-10-18 16:30:00', 0, 5),
(null, '2023-10-18 15:30:00', 1, 4),
(null, '2023-10-18 15:45:00', 0, 6),
(null, '2023-10-18 16:00:00', 1, 7),
(null, '2023-10-18 16:15:00', 1, 6),
(null, '2023-10-18 15:30:00', 1, 8),
(null, '2023-10-18 15:45:00', 0, 9),
(null, '2023-10-18 16:00:00', 1, 10),
(null, '2023-10-18 16:15:00', 1, 9),
(null, '2023-10-18 16:30:00', 0, 8),
(null, '2023-10-18 15:30:00', 1, 11),
(null, '2023-10-18 15:45:00', 0, 12),
(null, '2023-10-18 14:00:00', 1, 13);

-- Select zonas dos shopping's
select * from zona join shopping on fkShopping = idShopping;

-- Select todos os sensores por zona e shopping
select sensor.idSensor,
	   sensor.porta,
	   z.nome as 'Zona',
       s.nome as 'Shopping'
       from sensor join zona as z on fkZona = idZona
			join shopping as s on fkShopping = idShopping;

-- Select todos os sensores de um determinado andar de um determinado shopping
select sensor.idSensor,
	   sensor.porta,
	   z.nome as 'Zona',
       s.nome as 'Shopping'
       from sensor join zona as z on fkZona = idZona
			join shopping as s on fkShopping = idShopping
		where z.nome like 'Zona 1%' and s.nome = 'Shopping ABC';

-- Select login
select u.email, u.senha, s.nome from usuario as u 
	join shopping as s
    on fkShopping = idShopping;

-- Select informações do Shopping
select nome, cnpj, cep, numero, email from shopping;

select nome, cnpj, cep, numero, email from shopping
	where nome like 'Shopping A%';
    
-- Selecionando zonas, "sensores" e seus respectivos valores e horários
select s.nome as 'Shopping',
	   z.nome as 'Zona', 
       sensor.porta,
       d.presenca, 			-- Funcao para formatar exibição de data
       DATE_FORMAT(d.horaDia, '%d/%m/%Y %H:%i') AS 'Dia e hora' 
	from shopping as s
	join zona as z on fkShopping = idShopping
    join sensor on fkZona = idZona
    join dadosFluxo as d on fkSensor = idSensor;
    
-- Selecionando zonas e seus respectivos valores e horários de um determinado shopping
select s.nome as 'Shopping',
	   z.nome as 'Zona',
       d.presenca,			-- Funcao para formatar exibição de data
	    DATE_FORMAT(d.horaDia, '%d/%m/%Y %H:%i') AS 'Dia e hora' 
	from shopping as s
	join zona as z on fkShopping = idShopping
    join sensor on fkZona = idZona
    join dadosFluxo as d on fkSensor = idSensor
    where s.nome like '%Aricanduva%';




-- Selecionando os valores e suas respectivas zona de um determinado shopping em um horário específico
select s.nome as 'Shopping',
	   z.nome as 'Zona',
       d.presenca, 			-- Funcao para formatar exibição de data
       DATE_FORMAT(d.horaDia, '%d/%m/%Y %H:%i') AS 'Dia e hora' 
	from shopping as s
	join zona as z on fkShopping = idShopping
    join sensor on fkZona = idZona
    join dadosFluxo as d on fkSensor = idSensor
    where s.nome like '%Aricanduva%' and d.horaDia = '2023-10-18 15:30:00';

-- Select com todas as informações dos dados, zona, shopping e seus respectivos administradores
select s.nome as 'Shopping',
	   z.nome as 'Zona', 
       sensor.porta,
       d.presenca, 			-- Funcao para formatar exibição de data
       DATE_FORMAT(d.horaDia, '%d/%m/%Y %H:%i') AS 'Dia e hora',
       u.idUsuario,
      u.nome,
      u.tipoUsuario
       
	from shopping as s
	join zona as z on fkShopping = idShopping
    join sensor on fkZona = idZona
    join dadosFluxo as d on fkSensor = idSensor
      right join usuario as u on u.fkShopping = s.idShopping where u.tipoUsuario = 'admin';

