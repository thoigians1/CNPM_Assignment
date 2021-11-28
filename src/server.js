import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
// import cors from 'cors';
require('dotenv').config();


let app = express();
// app.use(cors({ origin: true }));
// Config app
// Add headers before the routes are defined
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

//---socketio---socketio

const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

const { generateMessage, generateLocationMessage } = require('./utils/messages')


io.on('connection', (socket) => {
    console.log("connected!");
    
    socket.on('join', ({username, room}) => {
        socket.join(room)

        socket.emit('message', generateMessage(`Welcome ${username}!`, username));
        socket.broadcast.to(room).emit('message', generateMessage(`${username} has joined!`));
        //io.to.emit, socket.broadcast.to.emit
    })

    socket.on("sendMessage", (msg, username, callback) => {
        // const filter = new Filter();

        // if (filter.isProfane(msg)) {
        //     return callback("Profanity is not allowed!");
        // }

        io.emit("message", generateMessage(msg, username));
        console.log(`msg sent to ${username}`)
        callback();
    });

    socket.on('disconnect', () => {
        io.emit('message', generateMessage("A user has left!"))
    })

    socket.on('sendLocation', (location, username, callback) => {
        io.emit('locationMessage', generateLocationMessage(`https://google.com/maps?q=${location.latitude},${location.longtitude}`, username));
        callback();
    })
})

//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
//PORT === undefined => 6969

server.listen(port, () => {
    //callback
    console.log("Backend listening on port " + port);
})

// app.listen(port, () => {
//     //callback
//     console.log("Backend listening on port " + port);
// })

