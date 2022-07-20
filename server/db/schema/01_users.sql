DROP TABLE IF EXISTS parent CASCADE;
DROP TABLE IF EXISTS baby CASCADE;
DROP TABLE IF EXISTS event CASCADE;


CREATE TABLE parent(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE baby(
  id SERIAL PRIMARY KEY NOT NULL,
  parent_id INT REFERENCES parent(id) ON DELETE CASCADE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  date_of_birth VARCHAR(255) NOT NULL,
  birth_location VARCHAR(255),
  picture_url VARCHAR(255)
);

CREATE TABLE event(
  id SERIAL PRIMARY KEY NOT NULL,
  baby_id INT REFERENCES baby(id) ON DELETE CASCADE,
  event_type VARCHAR(255) NOT NULL,
  event_detail VARCHAR NOT NULL,
  event_datetime DATE
);




