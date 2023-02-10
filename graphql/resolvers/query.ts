import { Context } from "@/lib/context";

export const Query = {
  quotes: async (_source: any, _args: any, ctx: Context) => {
    return await ctx.prisma.quote.findMany();
  },
  quoteById: async (_source: any, args: any, ctx: Context) => {
    return await ctx.prisma.quote.findFirst({
      where: { id: args.id },
    });
  },
};
