USE master
GO
IF NOT EXISTS (
    SELECT name
FROM sys.databases
WHERE name = N'moviePlannerDB'
)
CREATE DATABASE moviePlannerDB;
GO

CREATE TABLE movies
(
    id int NOT NULL AUTO_INCREMENT,
    movie VARCHAR (255),
    PRIMARY KEY (id)
);