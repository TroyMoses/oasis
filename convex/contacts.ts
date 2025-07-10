import { mutation, query } from "./_generated/server"
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
      isRead: false,
      createdAt: Date.now(),
    })
    return contactId
  },
})

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("contacts").order("desc").collect()
  },
})

export const markAsRead = mutation({
  args: {
    contactId: v.id("contacts"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.contactId, {
      isRead: true,
    })
  },
})
