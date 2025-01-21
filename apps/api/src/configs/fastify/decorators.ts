import { FastifyInstance, FastifyReply } from "fastify";

export const addReplyDecoratorDefault = (
  server: FastifyInstance
): FastifyInstance => {
  server.decorateReply(
    "default",
    function (
      this: FastifyReply,
      statusCode: number,
      status: string,
      message: string,
      data: any
    ) {
      return this.status(statusCode).send({
        statusCode: statusCode,
        status: status,
        message: message,
        data: data
      });
    }
  );
  return server;
};

export const addReplyDecoratorError = (
  server: FastifyInstance
): FastifyInstance => {
  server.decorateReply("error", function (this: FastifyReply, error: unknown) {
    if (error instanceof Error) {
      return this.default(400, error.name, error.message, undefined);
    }
    return this.default(500, "UnknownError", "An unknown error occured", undefined);
  });
  return server;
};
