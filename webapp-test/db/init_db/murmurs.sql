Create TABLE IF NOT EXISTS  murmur (
    id int NOT NULL AUTO_INCREMENT primary key,
    description varchar(280),
    likecount int NOT NULL default 0,
    CONSTRAINT fk_createdby 
	FOREIGN KEY (user_id) 
	REFERENCES user(id)
);
