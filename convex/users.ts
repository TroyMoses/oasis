import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values";

// Simple hash function for demo purposes
function hashPassword(password: string): string {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash.toString();
}

export const list = query({
  handler: async (ctx) => {
    const users = await ctx.db.query("users").order("desc").collect();
    return users.map((user) => ({
      _id: user._id,
      username: user.username,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin,
    }));
  },
});

export const create = mutation({
  args: {
    username: v.string(),
    password: v.string(),
    isAdmin: v.boolean(),
  },
  handler: async (ctx, args) => {
    // Check if username already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_username", (q) => q.eq("username", args.username))
      .first();

    if (existingUser) {
      throw new ConvexError("Username already exists");
    }

    const userId = await ctx.db.insert("users", {
      username: args.username,
      passwordHash: hashPassword(args.password),
      isAdmin: args.isAdmin,
      createdAt: Date.now(),
    });

    return userId;
  },
});

export const updateRole = mutation({
  args: {
    userId: v.id("users"),
    isAdmin: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.userId, {
      isAdmin: args.isAdmin,
    });
  },
});

export const deleteUser = mutation({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    // Don't allow deleting the last admin
    const user = await ctx.db.get(args.userId);
    if (user?.isAdmin) {
      const adminCount = await ctx.db
        .query("users")
        .filter((q) => q.eq(q.field("isAdmin"), true))
        .collect();

      if (adminCount.length <= 1) {
        throw new ConvexError("Cannot delete the last admin user");
      }
    }

    // Delete user sessions
    const sessions = await ctx.db
      .query("sessions")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();

    for (const session of sessions) {
      await ctx.db.delete(session._id);
    }

    // Delete user
    await ctx.db.delete(args.userId);
  },
});

export const changePassword = mutation({
  args: {
    userId: v.id("users"),
    newPassword: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.userId, {
      passwordHash: hashPassword(args.newPassword),
    });
  },
});
