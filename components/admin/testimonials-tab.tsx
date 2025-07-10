"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Star, Eye, EyeOff, Trash2 } from "lucide-react";
import type { Id } from "@/convex/_generated/dataModel";

export default function TestimonialsTab() {
  const testimonials = useQuery(api.testimonials.list) || [];
  const toggleVisibility = useMutation(api.testimonials.toggleVisibility);
  const deleteTestimonial = useMutation(api.testimonials.deleteTestimonial);
  const { toast } = useToast();

  const handleToggleVisibility = async (
    testimonialId: Id<"testimonials">,
    isVisible: boolean
  ) => {
    try {
      await toggleVisibility({ testimonialId, isVisible: !isVisible });
      toast({
        title: "Visibility updated",
        description: `Testimonial is now ${!isVisible ? "visible" : "hidden"}`,
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update testimonial visibility",
      });
    }
  };

  const handleDelete = async (testimonialId: Id<"testimonials">) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      await deleteTestimonial({ testimonialId });
      toast({
        title: "Testimonial deleted",
        description: "The testimonial has been permanently deleted",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete testimonial",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Customer Testimonials
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {testimonials.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No testimonials found
              </p>
            ) : (
              testimonials.map((testimonial) => (
                <Card
                  key={testimonial._id}
                  className={`border-l-4 ${testimonial.isVisible ? "border-l-green-500" : "border-l-gray-300"}`}
                >
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage
                              src={testimonial.imageUrl || undefined}
                            />
                            <AvatarFallback>
                              {testimonial.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Submitted:{" "}
                          {format(
                            new Date(testimonial.createdAt),
                            "MMM dd, yyyy"
                          )}
                        </div>
                        <Badge
                          variant={
                            testimonial.isVisible ? "default" : "secondary"
                          }
                          className={
                            testimonial.isVisible ?? false
                              ? "bg-green-100 text-green-800"
                              : ""
                          }
                        >
                          {testimonial.isVisible ? "Visible" : "Hidden"}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium">
                            Testimonial:
                          </span>
                          <blockquote className="text-sm mt-1 p-3 bg-gray-50 rounded italic">
                            "{testimonial.content}"
                          </blockquote>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button
                          size="sm"
                          variant={
                            testimonial.isVisible ? "outline" : "default"
                          }
                          onClick={() =>
                            handleToggleVisibility(
                              testimonial._id,
                              testimonial.isVisible ?? false
                            )
                          }
                          className={
                            testimonial.isVisible
                              ? ""
                              : "bg-green-600 hover:bg-green-700"
                          }
                        >
                          {testimonial.isVisible ? (
                            <>
                              <EyeOff className="h-4 w-4 mr-2" />
                              Hide
                            </>
                          ) : (
                            <>
                              <Eye className="h-4 w-4 mr-2" />
                              Show
                            </>
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(testimonial._id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
