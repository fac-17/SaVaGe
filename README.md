# SaVaGe

## Installation Guidelines

After cloning the repo, install dependencies and start the server
```bash
git clone https://github.com/fac-17/SaVaGe.git
cd SaVaGe
npm install
npm start
```

### Configure db
In the root directory you need the `.env` file with PosgreSQL connection URL in a form
```
DATABASE_URL=postgres://very:secret@data
````

then run db build script to create and populate the tables
```
npm run db_init
```
In your browser, open localhost:3000

### Product

SaVaGe Artwork Creator is an app that allows the user to create SVGs using different shapes. Once the SVG is created, the user can copy the code to add to his/her html file. 

### User Journey 
To create a SVG artwork, the user can either combine existing SVGs and shapes or create new SVGs and shapes - or a mix of both. 

To create a new SVG, the user needs to provide a name (i.e. "Monet") and can optionally give properties to that svg (i.e. "fill":"green", "stroke":"red"). Once the user clicked "Create SVG", a new svg is added to the database and is available in the dropdown menu below.

To create a new shape, the user needs to provide a name (i.e. "green Circle"), select one of the shape types fron the dropdown menu and give properties to shape (i.e. "cx":50,"cy":30,"r":10). Once the user clicked "Create Shape", a new shape is added to the database and is available in the dropdown menu below.

To create the final artwork, in the 'Add shapes to your SVG' section, the user needs to select a shape and a svg from the respective dropdown menus. The shape is then added to the svg and the svg appears in the gallery below. Multiple shapes can be added to the same svg. 

Once the user is happy with the final SVG, he/she copies the code below the SVG to paste in his/her website code. 

## Goals
- [x] Decide on idea
- [x] Draw Schema 
- [x] Write user journey 
- [x] Create github repo 
- [x] Install npm & create gitignore 
- [x] Deploy on Heroku
- [x] Set up/Decide on folder structure
- [x] Set up html boilerplate
- [x] Set up server side 
    - [x] Create router.js
    - [x] Create server.js 
    - [x] Create handler.js 
- [x] Set up Database - all
    - [x] Create connection js 
    - [x] Create Build Script (SQL file and js file)

- [x] Create queries on server side 
    - [x] INSERT query for svg table (D)
    - [x] INSERT query for shape table (E)
    - [x] INSERT query for svg_shape table (F)

    - [x] SELECT query for svg table (A)
    - [x] SELECT query for shape table (B)
    - [x] SELECT query for svg_shape table (C)

- [x] Front end requests 
    - [x] GET request to get list of svgs (A)
    - [x] GET request to get list of shapes (B)
    - [x] GET request to get final artwork ie all data (C)
    
    - [x] POST request to add shape to shape table (D)
    - [x] POST request to add svg to svg table (E)
    - [x] POST request to add to svg_shape table (F)

- [ ] Tests 
    - [x] Set up test database
     - [ ] Test server routers (supertest)
     - [ ] Tests pure functions

- [x] Update HTML 
    - [x] Add descriptions to input field
    - [x] Add default values to all inputs
    - [x] shape type needs to be a dropdown 
    - [x] attach names to SVG canvases 
    
- [ ] Update CSS 
    - [x] Create wireframe (discuss with group)
    - [x] Set up grid or flexbox 
    - [x] Set up fonts 
    - [ ] Set up colors 

- [x] Check and improve accessibility
- [x] Add app to Heroku 
- [ ] Modularise Code
- [x] Set up security measurements for database
- [ ] Write readme 


## Stretch Goals
- [ ] Connect to travis ?
- [ ] Add option to delete shapes 
- [ ] Add option to delete SVGs
- [ ] Edit shapes or SVGS (i.e. data in database)
- [ ] Add SELECT text to dropdown menus 

## Schema 
![](https://i.imgur.com/vQgf3pH.jpg)

### svg 

| column | definition |
| -------- | -------- | 
| id   | SERIAL PRIMARY KEY     | 
| props   | VARCHAR(200) NOT NULL     | 
| name   |   VARCHAR(40) NOT NULL  | 

### shape 

| column | definition |
|--------|------------|
| id | SERIAL PRIMARY KEY |
|   type | VARCHAR(30) NOT NULL |
|    name | VARCHAR(40) NOT NULL |
|    props | VARCHAR(200) NOT NULL|

### svg_shape
| column | definition |
|--------|------------|
|id |SERIAL PRIMARY KEY|
|svg_id |INTEGER NOT NULL REFERENCES svg(id)|
|shape_id | INTEGER NOT NULL REFERENCES shape(id)|

## Software Architecture
