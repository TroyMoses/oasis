import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    service: v.string(),
    date: v.string(),
    time: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    note: v.optional(v.string()),
    amount: v.number(),
  },
  handler: async (ctx, args) => {
    const appointmentId = await ctx.db.insert("appointments", {
      ...args,
      createdAt: Date.now(),
    });
    return appointmentId;
  },
});
