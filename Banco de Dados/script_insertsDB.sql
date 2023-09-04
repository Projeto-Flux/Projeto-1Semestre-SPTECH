USE projetoflux;
insert into empresa (nome, cnpj, email, cep, numero) values 
("Empresa A ","12345678900001","empresa.a@email.com","12345678","123"),
("Shopping XYZ","98765432100001","contato@comercioxyz.com","87654321","456"),
("Shopping 123","56789012300001","info@servicos123.net","54321098","789"),
("Shopping ABC","45678901200001","vendas@lojaabc.com","67890123","234"),
("Prestadora 789","78901234500001","contato@prestadora789.org","90123456","567");

select * from usuario;

insert into usuario (NomeUsuario, Email, Senha, Telefone, id_empresa) values 
('João Silva', 'joao@email.com', 'senha123', '12945678901', 1000),
('Maria Santos', 'maria@email.com', 'abc456', '98965432102', 1002),
('Pedro Almeida', 'pedro@email.com', 'Pedro123', '45978901203', 1000),
('Ana Oliveira', 'ana@email.com', 'ana123', '76943210904', 1003),
('Lucas Pereira', 'lucas@email.com', 'lucas567', '23956789005', 1002);

insert into zona (nomeZona, qtdSensores, tamanho, capacidade) values 
("Alpha",20, 100, 2000),
("Beta",10, 50, 1000),
("Gamma",20, 100, 2000),
("Delta",20, 100, 2000),
("Epsilon",5, 25, 500);


insert into sensores (id_zona, porta) values 
(1, 1), (1, 2),
(4, 1), (4, 2),
(3, 1), (3, 2),
(2, 1), (5, 1);


select * from fluxo;
insert into fluxo (id_sensor) values -- colocando somente o ID, pois ele irá adicionar o horário automatico do pc/server
(1), (1),
(3), (5),
(4), (1),
(3), (2);
