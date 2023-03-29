
/*
types:
1 - cliente
2 - garçon
3 - cozinheiro
4 - administrador
*/
CREATE TABLE UserConfig(
    uid varchar(255) primary key,
    type integer not null
);

CREATE TABLE Mesa(
    id serial primary key,
    numero integer not null,
    numeroMaxPessoas integer not null,
    ocupado boolean not null default false
);

CREATE TABLE Categoria(
    id serial primary key,
    nome varchar(255) not null
);

CREATE TABLE Produto(
    id serial primary key,
    nome varchar(255) not null,
    idCategoria integer foreign key Categoria,
    valor numeric(10,2) not null
);

CREATE TABLE Pedido(
    id serial primary key,
    idMesa integer foreign key Mesa,
    status integer
);

CREATE TABLE PedidoItem(
    id serial primary key,
    idPedido integer foreign key Pedido,
    idProduto integer foreign key Produto,
    valor numeric(10,2) not null
);