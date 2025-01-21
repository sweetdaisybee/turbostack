import "fastify";

declare module "fastify" {
  interface FastifyReply {
    error(
      error: unknown
    ): void;
    default(
      statusCode: number,
      status: string,
      message: string,
      data?: any
    ): void;
  }
}
