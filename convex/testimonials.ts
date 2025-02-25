import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    role: v.string(),
    content: v.string(),
    storageId: v.string(),
  },
  handler: async (ctx, args) => {
    const testimonialId = await ctx.db.insert("testimonials", {
      ...args,
      createdAt: Date.now(),
    });
    return testimonialId;
  },
});

export const list = query({
  handler: async (ctx) => {
    const testimonials = await ctx.db
      .query("testimonials")
      .order("desc")
      .collect();

    // Get signed URLs for each testimonial's image
    const testimonialsWithUrls = await Promise.all(
      testimonials.map(async (testimonial) => {
        const url = await ctx.storage.getUrl(testimonial.storageId);
        return {
          ...testimonial,
          imageUrl: url,
        };
      })
    );

    return testimonialsWithUrls;
  },
});
