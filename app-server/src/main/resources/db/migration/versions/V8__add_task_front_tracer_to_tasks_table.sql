DROP TABLE tasks;

CREATE TABLE IF NOT EXISTS tasks
(
    id         bigint primary key,
    task_front_tracer varchar(40) NOT NULL,
    title varchar NOT NULL,
    description TEXT DEFAULT NULL,
    date_of_accomplishing DATE NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    status varchar(20) NOT NULL,
    user_id bigint NOT NULL
);
