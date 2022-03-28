

CREATE TABLE IF NOT EXISTS user_account
(
    id         bigint primary key,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    email_address varchar(200) NOT NULL,
    password   varchar(100) NOT NULL,
    date_of_birth date NOT NULL
);

CREATE SEQUENCE user_account_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE CACHE 1;
