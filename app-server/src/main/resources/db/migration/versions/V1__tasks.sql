

CREATE TABLE IF NOT EXISTS tasks
(
    id         bigint primary key,
    title varchar NOT NULL,
    description TEXT DEFAULT NULL,
    date_of_accomplishing timestamp with time zone DEFAULT now() NOT NULL,
    email      varchar(300) NOT NULL,
    password   varchar(512) NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);

CREATE SEQUENCE task_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE CACHE 1;
