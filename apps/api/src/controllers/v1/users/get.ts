import { getAllUsers, getUserById } from "@libV1";
import { FastifyReply, FastifyRequest, RouteGenericInterface } from "fastify";

interface IUsersGetId extends RouteGenericInterface {
  Params: {
    id: number;
  };
}

export const conV1UsersGetRoot = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  try {
    const users = await getAllUsers();
    return reply.default(200, "success", "Getting all users", users)
  } catch (error: unknown) {
    return reply.error(error);
  }
};

export const conV1UsersGetId = async (
  request: FastifyRequest<IUsersGetId>,
  reply: FastifyReply
): Promise<void> => {
  const { id } = request.params;
  try {
    const user = await getUserById(id);
    return reply.default(200, "success", `Getting user with id ${id}`, [user]);
  } catch (error: unknown) {
    return reply.error(error);
  }
};
