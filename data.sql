CREATE TABLE users(
    id text not null,
    fullname varchar(250) not null,
    email varchar(250) not null,
    password text not null,
    role varchar(100) not null
);
CREATE TABLE category(
    id text not null,
    name varchar(100) not null
);