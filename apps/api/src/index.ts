import { initFastify } from "@configs";
import { rV1Users } from "@routesV1";
import dotenv from "dotenv";

dotenv.config();

export const server = initFastify();

server.register(rV1Users, { prefix: "/api/v1/users" });
