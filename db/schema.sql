### Schema

CREATE DATABASE Sempiternal_db;
USE Sempiternal_db;

CREATE TABLE player
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);