/*
\c postgres
DROP DATABASE IF EXISTS fishable;
CREATE DATABASE fishable;
\c fishable
 */

-- ENABLE POSTGIS for geometry support, creates a "spatial_ref_sys" table.

CREATE EXTENSION IF NOT EXISTS postgis;


CREATE TABLE account (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    username  VARCHAR(255) NULL,
    password_hash VARCHAR(255) NOT NULL,
    password_salt VARCHAR(255) NOT NULL,
    date_joined TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

CREATE TABLE location (
    location_id SERIAL PRIMARY KEY,
    account_id INTEGER REFERENCES account(id),
    latlong GEOMETRY(POINT, 4326),
    name VARCHAR(255),
    description TEXT,
    image TEXT
);

CREATE TABLE catch (
    catch_id SERIAL PRIMARY KEY,
    account_id INTEGER REFERENCES account(id),
    location_id INTEGER REFERENCES location(location_id),
    name VARCHAR(255),
    description TEXT,
    date DATE,
    image TEXT
);

CREATE TABLE regulation (
    regulation_id SERIAL PRIMARY KEY,
    latlong POINT,
    description TEXT,
    start_date DATE,
    end_date DATE
);

CREATE TABLE bait (
    bait_id SERIAL PRIMARY KEY,
    account_id INTEGER REFERENCES account(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image TEXT
);

CREATE TABLE lure (
    lure_id SERIAL PRIMARY KEY,
    account_id INTEGER REFERENCES account(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image TEXT
);
