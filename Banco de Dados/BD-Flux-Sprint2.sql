create database projetoflux;
use projetoflux;

-- Criando as Tabelas e suas respectivas chaves estrangeiras.
create table empresa(
	idEmpresa int primary key auto_increment,
    nome varchar(100),
    cnpj varchar (14),
    email varchar(100),
    cep varchar(8),
    numero varchar (10))auto_increment=1000;

create table Funcionario(
	idFuncionario int primary key auto_increment,
	nome varchar (100) not null,
	Email varchar (100) not null,
	Senha varchar (100) not null,
	tipoUsuario char(5),
    fk_idEmpresa int,
    constraint FkUsuario foreign key (fk_idEmpresa) references empresa(idEmpresa));

create table zona(
	idZona int primary key auto_increment,
    nomeZona varchar(30),
    qtdSensores int,
    tamanho int,
    capacidade int,
    fk_idEmpresa int,
    fk_idFuncionario int,
    constraint FkZona foreign key (fk_idEmpresa) references empresa(idEmpresa),
    constraint FkFuncionario foreign key (fk_idFuncionario) references Funcionario(idFuncionario));

create table sensores(
	idSensor int primary key auto_increment,
    porta int,
    fk_idZona int,
    constraint FkSensor foreign key (fk_idZona) references zona(idZona));

create table fluxo(
	idFluxo int primary key auto_increment,
    horarioDia datetime default current_timestamp,
    fk_idSensor int,
    constraint Fkfluxo foreign key (fk_idSensor) references sensores(idSensor));
    
    
-- Inserindo Dados mockados nas tabelas
insert into empresa (nome, cnpj, email, cep, numero) values 
("Empresa A ","12345678900001","empresa.a@email.com","12345678","123"),
("Shopping XYZ","98765432100001","contato@comercioxyz.com","87654321","456"),
("Shopping 123","56789012300001","info@servicos123.net","54321098","789"),
("Shopping ABC","45678901200001","vendas@lojaabc.com","67890123","234"),
("Prestadora 789","78901234500001","contato@prestadora789.org","90123456","567");


insert into usuario (NomeUsuario, Email, Senha, Telefone, fk_idEmpresa) values 
('João Silva', 'joao@email.com', 'senha123', '12945678901', 1000),
('Maria Santos', 'maria@email.com', 'abc456', '98965432102', 1001),
('Pedro Almeida', 'pedro@email.com', 'Pedro123', '45978901203', 1002),
('Ana Oliveira', 'ana@email.com', 'ana123', '76943210904', 1003),
('Lucas Pereira', 'lucas@email.com', 'lucas567', '23956789005', 1001);

insert into zona (nomeZona, qtdSensores, tamanho, capacidade, fk_idEmpresa) values 
("Alpha",20, 100, 2000, 1000),
("Beta",10, 50, 1000, 1001),
("Gamma",20, 100, 2000, 1002),
("Delta",20, 100, 2000, 1003),
("Epsilon",5, 25, 500, 1002);


insert into sensores (fk_idZona, porta) values 
(1, 1), (1, 2),
(4, 1), (4, 2),
(3, 1), (3, 2),
(2, 1), (5, 1);


insert into fluxo (fk_idSensor) values -- colocando somente o ID, pois ele irá adicionar o horário automatico do pc/server
(1), (1),
(3), (5),
(4), (1),
(3), (2);
    
-- Realizando o SELECT
select * from fluxo;

select * from usuario join empresa on fk_idEmpresa = idEmpresa;
select * from sensores join zona join empresa join fluxo on fk_idzona = idZona and fk_idEmpresa = idEmpresa;





