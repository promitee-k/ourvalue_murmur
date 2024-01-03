Create TABLE IF NOT EXISTS user (
    id int NOT NULL primary key,
    name varchar(30) NOT NULL,
);

INSERT INTO user(id, name) VALUES (1,'alice');
INSERT INTO user(id, name) VALUES (2,'bob');
INSERT INTO user(id, name) VALUES (3,'rick');
INSERT INTO user(id, name) VALUES (4,'morty');

