Create DATABASE wishes_db;
use wishes_db;
create table wishes
(
    id int NOT NULL auto_increment,
    wish VARCHAR(225) not NULL,
    PRIMARY KEY (id)
);