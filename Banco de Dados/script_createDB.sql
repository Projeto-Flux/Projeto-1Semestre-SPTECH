create database projetoflux;
use projetoflux;

create table empresa(
	idEmpresa int primary key auto_increment,
    nome varchar(100),
    cnpj varchar (14),
    email varchar(100),
    cep varchar(8),
    numero varchar (10))auto_increment=1000;

create table usuario(
	idUsuario int primary key auto_increment,
	NomeUsuario varchar (100) not null,
	Email varchar (100) not null,
	Senha varchar (100) not null,
	Telefone varchar (11),
	id_empresa int);

create table zona(
	idZona int primary key auto_increment,
    nomeZona varchar(30),
    qtdSensores int,
    tamanho int,
    capacidade int);

create table sensores(
	idSensor int primary key auto_increment,
    id_zona int,
    porta int);

create table fluxo(
	idFluxo int primary key auto_increment,
    horarioDia datetime,
    id_sensor int);

