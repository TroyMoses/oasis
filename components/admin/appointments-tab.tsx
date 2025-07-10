"use client";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Calendar, Clock, User, Phone, Mail } from "lucide-react";
import type { Id } from "@/convex/_generated/dataModel";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

export default function AppointmentsTab() {
  const appointments = useQuery(api.appointments.list) || [];
  const updateStatus = useMutation(api.appointments.updateStatus);
  const { toast } = useToast();

  const handleStatusChange = async (
    appointmentId: Id<"appointments">,
    newStatus: string
  ) => {
    try {
      await updateStatus({ appointmentId, status: newStatus });
      toast({
        title: "Status updated",
        description: `Appointment status changed to ${newStatus}`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update appointment status",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Appointments Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No appointments found
              </p>
            ) : (
              appointments.map((appointment) => (
                <Card
                  key={appointment._id}
                  className="border-l-4 border-l-blue-500"
                >
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">
                            {appointment.firstName} {appointment.lastName}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{appointment.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{appointment.phone}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">
                            {format(new Date(appointment.date), "MMM dd, yyyy")}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{appointment.time}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Service: </span>
                          <span className="text-sm">{appointment.service}</span>
                        </div>
                        {appointment.note && (
                          <div>
                            <span className="text-sm font-medium">Note: </span>
                            <span className="text-sm">{appointment.note}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge
                            className={
                              statusColors[
                                appointment.status as keyof typeof statusColors
                              ]
                            }
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                        <Select
                          value={appointment.status}
                          onValueChange={(value) =>
                            handleStatusChange(appointment._id, value)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="text-xs text-muted-foreground">
                          Created:{" "}
                          {format(
                            new Date(appointment.createdAt),
                            "MMM dd, yyyy"
                          )}
                        </div>
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
