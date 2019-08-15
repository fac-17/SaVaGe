BEGIN;

DROP TABLE IF EXISTS login_details CASCADE;
DROP TABLE IF EXISTS svg CASCADE;
DROP TABLE IF EXISTS shape CASCADE;
DROP TABLE IF EXISTS svg_shape CASCADE;

CREATE TABLE login_details (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE svg (
    id SERIAL PRIMARY KEY,
    props VARCHAR(200) NOT NULL,
    name VARCHAR(40) NOT NULL UNIQUE,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES login_details(id)
);

CREATE TABLE shape (
    id SERIAL PRIMARY KEY,
    type VARCHAR(30) NOT NULL,
    name VARCHAR(40) NOT NULL UNIQUE,
    props VARCHAR(200) NOT NULL
);
-- click add to artwork
CREATE TABLE svg_shape (
    id SERIAL PRIMARY KEY,
    svg_id INTEGER NOT NULL,
    shape_id INTEGER NOT NULL,
    FOREIGN KEY (svg_id) REFERENCES svg(id),
    FOREIGN KEY (shape_id) REFERENCES shape(id)
);
-- //login table 
INSERT INTO login_details(username, password) VALUES
  ('Leonie', 'bump'),
  ('Jan', 'poo666'),
  ('Francesca', 'ciao'),
  ('Colette', 'butts'),
  ('Sam', 'jam');

INSERT INTO svg(name,props,user_id) VALUES
  ('picasso','{"fill":"pink"}',1),
  ('rembrandt','{"stroke":"red"}',2),
  ('banksy','{"viewPort":"0 0 72 72"}',3),
  ('monet','{"viewPort":"0 0 72 72"}',4),
  ('dali','{"viewPort":"0 0 72 72"}',5);

INSERT INTO shape(name,type,props) VALUES
('circle1','circle','{"cy":23,"cx":34,"r":10}'),
('sq','rect','{"x":20,"y":30,"width":40,"height":40}'),
('triangle','polygon','{"points":"60 60 30 30 10 50"}'),
('hex','polygon','{"points":"36 4 52 20 52 36 36 70 20 36"}'),
('ring','circle','{"cx":50,"cy":70,"r":30}');

INSERT INTO svg_shape(svg_id,shape_id) VALUES
(1,3),
(1,5),
(2,5),
(2,3),
(2,1),
(3,4);

COMMIT;
