BEGIN;

DROP TABLE IF EXISTS svg CASCADE;
DROP TABLE IF EXISTS shape CASCADE;
DROP TABLE IF EXISTS svg_shape CASCADE;

CREATE TABLE svg (
    id SERIAL PRIMARY KEY,
    props VARCHAR(200) NOT NULL,
    name VARCHAR(40) NOT NULL
);

CREATE TABLE shape (
    id SERIAL PRIMARY KEY,
    type VARCHAR(30) NOT NULL,
    name VARCHAR(40) NOT NULL,
    props VARCHAR(200) NOT NULL
);

CREATE TABLE svg_shape (
    id SERIAL PRIMARY KEY,
    svg_id INTEGER NOT NULL,
    shape_id INTEGER NOT NULL,
    FOREIGN KEY (svg_id) REFERENCES svg(id),
    FOREIGN KEY (shape_id) REFERENCES shape(id)
);

INSERT INTO svg(name,props) VALUES 
  ('picasso','{"fill":"pink"}'),
  ('rembrandt','{"stroke":"red"}'),
  ('banksy','{"viewPort":"0 0 72 72"}');

INSERT INTO shape(name,type,props) VALUES 
('circle1','circle','{"cy":23,"cx":34,"r":10}'),
('sq','rect','{"x":20,"y":30,"width":40,"height":40}'),
('triangle','polygon','{"points":"60 60 30 30 10 50"}'),
('hex','polygon','{"points":"36 4 52 20 52 36 36 70 20 36"}'),
('ring','circle','{"cx":50,"cy":70,"r":30}');

INSERT INTO svg_shape(svg_id,shape_id) VALUES
(1,3),(1,5),
(2,5),(2,3),(2,1),
(3,4);

COMMIT;
