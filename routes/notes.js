const notes = require('express').Router();
uuid = require('../helpers/uuid');

const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsutils');

notes.get('/', (req, res) =>{
    console.info(`${req.method} request recieved`);
readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)))
})