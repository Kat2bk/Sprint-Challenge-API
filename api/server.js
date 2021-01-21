const express = require('express');
const helmet = require('helmet');
const actionsRouter = require('./actions/actions-router');
const errorMiddleWare = require('./errorMiddleware');
const server = express();
server.use(express.json())

server.use(helmet());
server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
    res.send('Welcome to the API')
})

server.use(errorMiddleWare)


// Complete your server here!
// Do NOT `server.listen()` inside this file!

module.exports = server;
