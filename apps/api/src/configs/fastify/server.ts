import fastify, { FastifyInstance, FastifyListenOptions } from "fastify";
import { addReplyDecoratorDefault, addReplyDecoratorError } from "./decorators.js";

export const initFastify = (): FastifyInstance => {
  let server: FastifyInstance = fastify();
  if (!process.env.FASTIFY_HOST) {
    throw new Error("Please define all env variables");
  }
  if (!process.env.FASTIFY_PORT) {
    throw new Error("Please define all env variables");
  }
  server = addReplyDecoratorDefault(server);
  server = addReplyDecoratorError(server);
  const listenOptions: FastifyListenOptions = {
    host: process.env.FASTIFY_HOST,
    port: Number(process.env.FASTIFY_PORT)
  }
  console.log("Starting fastify server");
  server.listen(listenOptions);
  return server;
};
