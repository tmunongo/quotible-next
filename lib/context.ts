import { PrismaClient } from "@prisma/client";

// create an instance of prisma client
const prisma = new PrismaClient();

export type Context = {
  prisma: PrismaClient;
};

// use createContext to create a new context object to
// make prisma client available to the rest of the
// application
export async function createContext(): Promise<Context> {
  return {
    prisma,
  };
}
