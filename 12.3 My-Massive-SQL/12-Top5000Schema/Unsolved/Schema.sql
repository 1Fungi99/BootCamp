create DATABASE topSongs;

USE topSongs;

create TABLE songList (
    id int not null,
    artist VARCHAR(100) null,
    title VARCHAR(50) null,
    released int null,
    raw_total decimal(10,4) NULL,
    raw_usa decimal(10,4) Null,
    raw_uk decimal(10,4) Null,
    raw_eur decimal(10,4) null,
    raw_row DECIMAL(10,4) null,
    PRIMARY key (ID)
)
select*from top5000;