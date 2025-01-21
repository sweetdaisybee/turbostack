import { prisma , TUser } from "@turbostack/shared"

export const getAllUsers = async (): Promise<TUser[]> => {
  try {
    const users: TUser[] = await prisma.mono_user.findMany();
    return users;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
    }
    throw new Error("Unknown error occured");
  }
};

export const getUserById = async (
  id: number
): Promise<TUser> => {
  try {
    const user: TUser | null = await prisma.mono_user.findUnique({
      where: {
        id: id
      }
    });
    if (!user) {
      throw new Error(`Couldn't find user with id ${id}`);
    }
    return user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
    }
    throw new Error("Unknown error occured");
  }
}