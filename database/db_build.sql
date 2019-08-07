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
  ('picasso','{}'),
  ('rembrandt','{"stroke":"red"}'),
  ('banksy','{"viewPort":"0 0 72 72"}');

INSERT INTO shape(name,type,props) VALUES 
('cir1','circle','{"cy":23,"cx":34,"r":10}'),
('sq','rect','{}'),
('triangle','polygon','{}'),
('hex','polygon','{}'),
('ring','circle','{}');

INSERT INTO svg_shape(svg_id,shape_id) VALUES
(1,3),(1,5),
(2,5),(2,3),(2,1),
(3,4);

COMMIT;
