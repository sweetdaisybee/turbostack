import { HTTPMethods, preHandlerHookHandler, RouteHandlerMethod } from "fastify"

export interface IRoute {
  name: string,
  routeOptions: {
    method: HTTPMethods;
    url: string;
    preHandler?: preHandlerHookHandler[];
    handler: RouteHandlerMethod;
  }
}
