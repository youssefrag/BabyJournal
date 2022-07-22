DROP TABLE IF EXISTS parent CASCADE;
DROP TABLE IF EXISTS baby CASCADE;
DROP TABLE IF EXISTS event CASCADE;
DROP TABLE IF EXISTS measurement CASCADE;


CREATE TABLE parent(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE baby(
  id SERIAL PRIMARY KEY NOT NULL,
  parent_id INT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  date_of_birth VARCHAR(255) NOT NULL,
  birth_location VARCHAR(255),
  picture_url VARCHAR(500)
);

CREATE TABLE event(
  id SERIAL PRIMARY KEY NOT NULL,
  baby_id INT REFERENCES baby(id) ON DELETE CASCADE,
  event_type VARCHAR(255) NOT NULL,
  event_detail VARCHAR NOT NULL,
  event_date DATE
);

CREATE TABLE measurement(
  id SERIAL PRIMARY KEY NOT NULL,
  baby_id INT REFERENCES baby(id) ON DELETE CASCADE,
  measurement_type VARCHAR(255) NOT NULL,
  measurement_detail VARCHAR NOT NULL,
  measurement_date DATE
);




