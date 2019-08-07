# SaVaGe
## Creating a database 

### Project

This week's project will involve setting up a database which you connect to via a node.js server. You'll use your data to make a dynamic web app for your front-end.

### Requirements

- [ ] Simple web app with a node server and a database.
- [ ] Your database comes with a schema, which should be documented in your readme (along with any other architectural decisions).
- [ ] Database hosted on Heroku, or locally.
- [ ] Build script for your database.
- [ ] Security concerns appropriately considered (you must protect against script injections!).
- [ ] Content dynamic, but DOM manipulation kept to a minimum.
- [ ] Mobile-first design.
- [ ] Clear user journey (even if you take one of our suggested ideas, document the user journey in your readme).
- [ ] Test your server routes with supertest.
- [ ] Test your pure functions both server and client side.
- [ ] Set up a test database so that you can test your database queries.

### Getting started

Make sure you have a plan, and break the project down into manageable parts. Here are some things to consider:

You will need to make the requests and update the DOM in response using client-side JavaScript. As well as serving static HTML and JS files, your server will also need to provide endpoints that return DB query results as JSON. You can query your server from the client using the XMLHttpRequest method. You'll need to be able to make both POSTand GET requests to your server.
