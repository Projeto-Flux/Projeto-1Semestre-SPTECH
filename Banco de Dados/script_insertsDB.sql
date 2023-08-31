USE projetoflux;
insert into empresa (nome, cnpj, email, cep, numero) values 
("Empresa A ","12345678900001","empresa.a@email.com","12345678","123"),
("Comércio XYZ","98765432100001","contato@comercioxyz.com","87654321","456"),
("Serviços 123","56789012300001","info@servicos123.net","54321098","789"),
("Loja ABC","45678901200001","vendas@lojaabc.com","67890123","234"),
("Prestadora 789","78901234500001","contato@prestadora789.org","90123456","567");

select * from usuario;

insert into usuario (NomeUsuario, Email, Senha, Telefone, id_empresa) values 
('João Silva', 'joao@email.com', 'senha123', '12945678901', 1000),
('Maria Santos', 'maria@email.com', 'abc456', '98965432102', 1002),
('Pedro Almeida', 'pedro@email.com', 'Pedro123', '45978901203', 1000),
('Ana Oliveira', 'ana@email.com', 'ana123', '76943210904', 1003),
('Lucas Pereira', 'lucas@email.com', 'lucas567', '23956789005', 1002);

insert into zona (nomeZona, qtdSensores, tamanho, capacidade) values 
("Alpha",5, , ),
("Beta",11,52, ),
("Gamma",20,100, ),
("Delta",6, , ),
("Epsilon",9, , );