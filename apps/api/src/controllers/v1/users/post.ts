import { createUser } from "@libV1";
import { TUser } from "@monorepo/shared";
import { FastifyReply, FastifyRequest, RouteGenericInterface } from "fastify";

interface IUsersPostRoot extends RouteGenericInterface {
  Body: {
    firstName: TUser["firstName"];
    lastName: TUser["lastName"];
    username: TUser["username"];
    email: TUser["email"];
  };
}

export const conV1UserPostRoot = async (
  request: FastifyRequest<IUsersPostRoot>,
  reply: FastifyReply
): Promise<void> => {
  const { firstName, lastName, username, email } = request.body;
  try {
    const user = await createUser(firstName, lastName, username, email);
    return reply.default(201, "success", "Created user", [user])
  } catch (error: unknown) {
    return reply.error(error);
  }
};
