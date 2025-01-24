import { mutation } from "./_generated/server"
import { v } from "convex/values"

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const contactId = await ctx.db.insert("contacts", {
      ...args,
      createdAt: Date.now(),
    })
    return contactId
  },
})

