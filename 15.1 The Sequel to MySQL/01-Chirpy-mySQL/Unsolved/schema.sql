CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps (

  -- TABLE CODE TO GO HERE
  id int not null auto_increment,
  author varchar(255) not null,
  chirp varchar(255) not null,
  created varchar(255) not null,
  primary key (id)
);