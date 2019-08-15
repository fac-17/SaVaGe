# SaVaGe

SaVaGe Artwork Creator by Bumpy and The Midwives

Colette, Leonie, Francesca, Jan, Sam


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

### Testing

To do tests, you need another db setup with variable `TEST_DB_URL` set to  testing db url in `.env`
Then to run all tests (including db and server):
```
npm test
```

### Product

SaVaGe Artwork Creator is an app that allows the user to create SVGs using different shapes. Once the SVG is created, the user can copy the code to add to his/her html file. 

### User Journey 
1.) User logs in with username & password
2.) Once logged in, user can create SVGs and create shapes
3.) To create the artwork, the user can select any shape (created by any user) and add it to his/her svgs (only the svgs that he/she created) 

All artwork (created by any user) is visible in the gallery. The gallery is alway visible, no matter if the user is logged in or not. 

## Stretch Goals
- [ ] Connect to travis ?
- [ ] Add option to delete shapes 
- [ ] Add option to delete SVGs
- [ ] Edit shapes or SVGS (i.e. data in database)
- [ ] Add SELECT text to dropdown menus 
- [ ] Hash password
- [ ] Fix mobile view (login area)
- [ ] Testing 
    - [ ] Supertest 
    - [ ] Front-end logic test 
- [ ] Create account
- [ ] Create profile page  
- [ ] Add comment functionality 
- [ ] Implement client-side verificaton 
    - [ ] Error message for username 
    - [ ] Error message for password
- [ ] Turn nested ifs into promises
- [ ] Add user delete functionality 
- [ ]  Client-side and server-side validation on login form, including error handling that provides feedback to users
- [ ]  Add roles and permissions - Have an "admin" level user (role) who can edit and delete all content scream (permissions)
- [ ]  Add comment functionality to content
- [ ]  Add like functionality to content

## Schema 
![](https://i.imgur.com/vQgf3pH.jpg)

### details_login 
| column | definition |
| -------- | -------- | 
| id   | SERIAL PRIMARY KEY     | 
| username  | VARCHAR(200) NOT NULL     | 
| password   |   VARCHAR(40) NOT NULL  | 

### svg 
| column | definition |
| -------- | -------- | 
| id   | SERIAL PRIMARY KEY     | 
| props   | VARCHAR(200) NOT NULL     | 
| name   |   VARCHAR(40) NOT NULL  | 
| user_id   |   INTEGER NOT NULL REFERENCES details_login(id)  | 

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

## Learning outcomes 
- Default gitignore  created by Github 
- Repeat last argument in Command line: ESC .
- SVG structure
- INSERT with parameters to increase security


