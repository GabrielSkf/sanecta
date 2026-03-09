CREATE TABLE IF NOT EXISTS users (
    id bigint AUTO_INCREMENT primary key,
    username varchar(255) not null,
    password varchar(255) not null,
    email varchar(255) not null
);
