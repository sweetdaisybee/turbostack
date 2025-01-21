import { prisma, TUser } from "@turbostack/shared";

export const createUser = async (
  firstName: TUser["firstName"],
  lastName: TUser["lastName"],
  username: TUser["username"],
  email: TUser["email"]
) => {
  try {
    const user: TUser = await prisma.mono_user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email
      }
    });
    return user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
    }
    throw new Error("Unknown error occured");
  }
};
