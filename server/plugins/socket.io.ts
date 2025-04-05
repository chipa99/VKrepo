import type { NitroApp } from "nitropack";
import { Server as Engine } from "engine.io";
import { Server } from "socket.io";
import { defineEventHandler } from "h3";
// import { Message } from "~/server/models/message.model";
import mongoose from "mongoose";

export default defineNitroPlugin(async (nitroApp: NitroApp) => {
    const engine = new Engine();
    const io = new Server();
    try {
        await mongoose.connect("mongodb://localhost:27017/vk");
    } catch (e) {
        console.error(e);
    }
    let clients = new Map();
    io.bind(engine);
    io.on('connection', function (socket) {
        socket.on('logged_in', function (_id) {
            clients.set(_id, socket.id);
        });
        socket.on('chat message', async function ({ text, receiver, sender, name, date }) {
            io.to(clients.get(receiver)).emit('chat message', { message: text, sender, receiver, name, date });
        });
    });
    nitroApp.router.use("/socket.io/", defineEventHandler({
        handler(event) {
            engine.handleRequest(event.node.req, event.node.res);
            event._handled = true;
        },
        websocket: {
            open(peer) {
                // @ts-expect-error private method and property
                engine.prepare(peer._internal.nodeReq);
                // @ts-expect-error private method and property
                engine.onWebSocket(peer._internal.nodeReq, peer._internal.nodeReq.socket, peer.websocket);
            }
        }
    }));
});