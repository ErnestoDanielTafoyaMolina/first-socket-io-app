import express from "express";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import Sockets from "./sockets";
import { port } from "./config";



const app = express();

const server = http.createServer( app );
app.use( express.static(__dirname+"/public") );

const httpServer = server.listen( port );
console.log(`Server on port http://localhost:${port}`);

const io = new WebSocketServer( httpServer );

Sockets(io);


