"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Mail, Phone, User, MessageSquare, Eye } from "lucide-react";
import type { Id } from "@/convex/_generated/dataModel";

export default function ContactsTab() {
  const contacts = useQuery(api.contacts.list) || [];
  const markAsRead = useMutation(api.contacts.markAsRead);
  const { toast } = useToast();

  const handleMarkAsRead = async (contactId: Id<"contacts">) => {
    try {
      await markAsRead({ contactId });
      toast({
        title: "Marked as read",
        description: "Contact message has been marked as read",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to mark message as read",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Contact Messages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contacts.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No contact messages found
              </p>
            ) : (
              contacts.map((contact) => (
                <Card
                  key={contact._id}
                  className={`border-l-4 ${contact.isRead ? "border-l-gray-300" : "border-l-blue-500 bg-blue-50/30"}`}
                >
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{contact.name}</span>
                          {!contact.isRead && (
                            <Badge variant="destructive" className="text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{contact.email}</span>
                        </div>
                        {contact.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{contact.phone}</span>
                          </div>
                        )}
                        <div className="text-xs text-muted-foreground">
                          {format(
                            new Date(contact.createdAt),
                            "MMM dd, yyyy 'at' HH:mm"
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium">Subject: </span>
                          <span className="text-sm capitalize">
                            {contact.subject}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Message:</span>
                          <p className="text-sm mt-1 p-2 bg-gray-50 rounded">
                            {contact.message}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        {!contact.isRead && (
                          <Button
                            size="sm"
                            onClick={() => handleMarkAsRead(contact._id)}
                            className="bg-blue-800"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Mark as Read
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            window.open(`mailto:${contact.email}`, "_blank")
                          }
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Reply
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
