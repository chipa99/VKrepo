import type { NitroApp } from "nitropack";
import { Server as Engine } from "engine.io";
import { Server } from "socket.io";
import { defineEventHandler } from "h3";
// import { Message } from "~/server/models/message.model";
import mongoose from "mongoose";

export default defineNitroPlugin(async (nitroApp: NitroApp) => {
    const engine = new Engine();
    const io = new Server();

    // io.bind(engine);
    try {
        await mongoose.connect("mongodb://localhost:27017/vk");
    } catch (e) {
        console.error(e);
    }
    let clients = new Map(); // коллекция ключ-значение
    io.bind(engine);

    io.on('connection', function (socket) { //socket.id = RFKrgRGCtT89M3AAAAB
        // console.log(socket.id)
        socket.on('logged_in', function (_id) {
            // if ((clients.has(_id)) == false) {
            clients.set(_id, socket.id);
            // console.log(clients)
            // }
            // console.log(_id, socket.id)
            // console.log(clients)
            // console.log()
        });

        socket.on('chat message', async function ({ text, receiver, sender, name, date }) {
            // if (process.client) {
            // await message.save();
            io.to(clients.get(receiver)).emit('chat message', { message: text, sender, receiver, name, date });
            // }

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