CREATE DATABASE user;

USE user;

CREATE TABLE contact
(
    id int primary key not null
    name varchar(45) not null,
    old varchar(100) not null,
    direction varchar (150) not null
);