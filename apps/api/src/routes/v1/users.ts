import { 
  conV1UsersGetRoot,
  conV1UsersGetId,
  conV1UserPostRoot
} from "@controllersV1";
import { IRoute } from "@typesV1";
import { 
  FastifyInstance,
  HTTPMethods, 
  RouteHandlerMethod 
} from "fastify";

const routes: IRoute[] = [
  {
    name: "routeV1UsersGetRoot",
    routeOptions: {
      method: "GET" as HTTPMethods,
      url: "/" as string,
      handler: conV1UsersGetRoot as RouteHandlerMethod
    }
  },
  {
    name: "routeV1UsersGetId",
    routeOptions: {
      method: "GET" as HTTPMethods,
      url: "/:id" as string,
      handler: conV1UsersGetId as RouteHandlerMethod
    }
  },
  {
    name: "routeV1UsersPostRoot",
    routeOptions: {
      method: "POST" as HTTPMethods,
      url: "/" as string,
      handler: conV1UserPostRoot as RouteHandlerMethod
    }
  }
];

export const rV1Users = async (server: FastifyInstance): Promise<void> => {
  for (const route of routes) {
    await server.route(route.routeOptions);
  }
};
