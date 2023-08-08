-- create a table
CREATE TABLE IMDB (
  id INTEGER PRIMARY KEY,
  media IMG NULL,
  genre TEXT  NULL,
  review TEXT NULL,
  multiple skill TEXT NULL,
  multiple role TEXT NULL
);
-- insert some values
INSERT INTO IMDB VALUES ("https://images.app.goo.gl/km8XCuLdwzUsb7UQ9","comedy","good flim","dancer");
INSERT INTO IMDB VALUES ("https://images.app.goo.gl/W99uLqmdz2iGcCbE9","horror","no");
INSERT INTO IMDB VALUES ();
INSERT INTO IMDB VALUES ();
-- fetch some values
SELECT * FROM IMDB;