//import json-server package
const jsonServer = require('json-server');

//create json server
const projectServer = jsonServer.create();

//create connection to db.json
const router = jsonServer.router('db.json')

// creating middleware
const middleware = jsonServer.defaults()

//using middleware
projectServer.use(middleware);
projectServer.use(router)


const port = 5000;
projectServer.listen(port, () => {
    console.log(`json server is up and running in port ${port} `);
})
