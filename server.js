import express, { response } from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import {WebSocketServer} from 'ws';
import http from 'http';
import mysql from 'mysql';
import bodyParser from 'body-parser';

// let con = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "sammy",
//     password: "sammy",
//     database: "cryptostake"
// });
let con = mysql.createConnection({
    host: "q0h7yf5pynynaq54.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "gy5j42gpyobqtvwo",
    password: "lkvtu6t4jiwypttw",
    database: "myuskezvmard4yzb"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port =  process.env.PORT || 80;

app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)),'webapp', 'dist')));

let server = http.createServer(app);
//start server
server.listen(port,()=>{
    console.log('Server started at http://localhost:' + port);
});
app.get('/test',(req,res)=>{
    console.log(req.query);
    res.send('Hello World');
});

//Websocket
let wss = new WebSocketServer({server:server});
let clients = [];
// Event handler for connection
wss.on('connection', (ws) => {
    console.log('Client connected');
    clients.push(ws);
    // Event handler for receiving messages
    ws.on('message', (message) => {
        let msg = JSON.parse(message);
        if(msg.type == 'setup'){
            users[msg.data.username].client = ws;
        }
        
      console.log(`Received message: ${message}`);
    });
  
    // Event handler for disconnection
    ws.on('close', () => {
      console.log('Client disconnected');
      clients.splice(clients.indexOf(ws),1);
    });
});
export {app};